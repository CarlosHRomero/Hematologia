import { authManager } from '../authetication/authenticationManager';

async function FetchData(url) {
  const token = await authManager.getAccessToken();
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  console.log(url);
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
  const data = await response.json();
  return data;
}


export {FetchData}