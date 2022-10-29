import React from 'react';
import { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {
    
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [usuario, setUsuario] = useState({});
    return (
         <AppContext.Provider 
            value={{
                usuario
             }}>
               {props.children}
         </AppContext.Provider>
    )
}

export { AppContext, AppProvider };