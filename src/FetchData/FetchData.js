import { authManager } from '../authetication/authenticationManager';

async function FetchData(url, throw_error) {
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
try{
  const response = await fetch(SERVER_URL+url, _headers);
  if(!response.ok){
    console.log(response);
    throw Error('En FetchData: ' +response.status + ' '+response.statusText,  { cause: response.status });
  }
  const data = await response.json();
  //console.log(data);
  return data;
}
catch(e){
  //window.location.replace('/error')
  if(throw_error){
    console.log(e.cause);
    throw e;
  }
  else
    alert(e.message)
}
  
}

async function GetData(url, body) {
  const token = await authManager.getAccessToken();
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const requestOptions = {
      method: 'GET',
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


export {FetchData, GetData}