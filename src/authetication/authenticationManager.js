

const tokenKey = "testToken";


class AuthenticationManager {

    _token;
    _user = null;
    _userChangeReg = [];
    userChanged;

    _baseUrl = process.env.REACT_APP_SERVER_URL;


    async postData(url, payload) {
        var _headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const requestOptions = {
            method: "POST",
            headers: _headers,
            body: JSON.stringify(payload),
        };
        console.log(url);
        let result = await fetch(url, requestOptions);
        if (result.status === 200) {
            return result;
        }
    }


    async refresh(refreshToken) {

        var result = await this.postData(this._baseUrl + "refreshtoken", refreshToken);
        return result;
    }
    async login(userName, password) {
        console.log('username: '+userName)
        const result = await this.postData(this._baseUrl + "login", {
            Username: userName,
            Password: password,
        });
        console.log('resultado: ' +result);
        if (result?.status === 200) {
            const data = await result.json();
            if (data) {
                authManager.updateToken(data);
                return true;
            }
            return false;
        }
        return false;
    }

    tokenUpdated(newToken) {
        this._token = newToken;
        if (this.userChanged) {
            this.userChanged(this);
        }
    }

    constructor() {
        var token = window.localStorage.getItem(tokenKey);
        if (token) {
            token = JSON.parse(window.localStorage.getItem(tokenKey));
        }
        this._processToken(token);
        window.addEventListener('storage', (event) => {
            if (event.key === tokenKey) {
                var newToken = event.newValue;
                if (newToken) {
                    newToken = JSON.parse(newToken);
                }

                this._processToken(newToken);
                this.tokenUpdated(newToken);
            }
        }, false);

        setInterval(
            () => this.checkTokenExpiry(this)
            , 60000
        );
    }

    checkTokenExpiry(_this) {
        if (!_this) {
            _this = this;
        }
        if (_this._user != null) {
            let expired = _this._user.exp < (Date.now() - 1000 * 60 * 5) / 1000;
            if (expired) {
                this.refresh(_this.getRefreshToken())
                    .then(
                        (newToken) => { _this.updateToken(newToken) }
                    )
                    .catch(() => {
                        _this.updateToken(null);
                        window.location.href = "/login";
                    });
            }
        }
        return Promise.resolve();
    }

    _processToken(token) {
        if (!token) {
            return;
        }
        this._token = token;
        this._user = null;
        try {
            // this._user = JwtDecode(token);
            this._user = 'xxx';
        } catch (error) {
            console.log(error);
            //alert(error.message);
        }
    }

    updateToken(token) {
        console.log(token)

        this._token = token;
        this._processToken(token);
        if (token) {
            console.log('almaceno token');
            //alert(token);
            const jtoken = JSON.stringify(token)
            localStorage.setItem(tokenKey, jtoken);
            let result = localStorage.getItem(tokenKey);
        }
        else {
            window.localStorage.removeItem(tokenKey);
        }
    }

    getAccessToken() {
        let result = window.localStorage.getItem(tokenKey);
        if (!result) {
            return "";
        }
        const jtoken = JSON.parse(result);
        console.log('en get access token jtoken = ' + jtoken);
        return jtoken;
    }

    getRefreshToken() {
        let result = window.localStorage.getItem(tokenKey);
        if (!result) {
            return "";
        }
        return JSON.parse(result).refreshToken;
    }

    logout() {
        this.updateToken(null);
    }
}

const authManager = new AuthenticationManager();

export { authManager };