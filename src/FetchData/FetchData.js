import { authManager } from '../authetication/authenticationManager';

async function FetchData(url) {
  const token = await authManager.getAccessToken();
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  //console.log(url);
  var _headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  };
  if (token) {
    _headers.headers["Authorization"] = "Bearer " + token;
  }

  const response = await fetch(SERVER_URL+url, _headers);
 // console.log('response',response);
  const data = await response.json();
  //console.log(data);
  return data;
}


export {FetchData}