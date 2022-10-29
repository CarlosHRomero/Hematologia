import { authManager } from '../authetication/authenticationManager';
async function PostData(url, body) {
    const token = await authManager.getAccessToken();
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    };
    console.log('token', token);
    if (token) {
        requestOptions.headers["Authorization"] = "Bearer " + token;
    }
    console.log('requestOptions', requestOptions);
    console.log('body', body);
    try{
        const response = await fetch(SERVER_URL + url, requestOptions);
        if(!response.ok){
            console.log(response);
            throw Error('En PostData: ' +response.status + ' '+response.statusText, response.status);
         }
        const data = await response.json();
        console.log('data', data)
        return data;
    }
    catch(e){
        alert(e);
        return false;
    }
    

}

export { PostData }