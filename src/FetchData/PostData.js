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
    console.log('requestOptions', requestOptions);
    try{
        const response = await fetch(SERVER_URL + url, requestOptions);
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