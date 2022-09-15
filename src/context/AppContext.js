import React from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {
    
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    return (
         <AppContext.Provider 
            value={{
                SERVER_URL
             }}>
               {props.children}
         </AppContext.Provider>
    )
}

export { AppContext, AppProvider };