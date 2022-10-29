import { authManager } from '../authetication/authenticationManager';
async function PutData(url, body, throw_error) {
    const token = await authManager.getAccessToken();
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    var _headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
    };

    if (token) {
        _headers["Authorization"] = "Bearer " + token;
    }
    const requestOptions = {
        method: 'PUT',
        headers: _headers,
        body: JSON.stringify(body)
    };
    console.log('requestOptions', requestOptions);
    try {
        const response = await fetch(SERVER_URL + url, requestOptions);
        if (!response.ok) {
            console.log(response);
            throw Error('En FetchData: ' + response.status + ' ' + response.statusText);
        }
        console.log('response', response)
        return true;
    }
    catch (e) {
        if (throw_error)
            throw Error(e.message);
        else
            alert(e.message);
        return false;
    }


}

export { PutData }