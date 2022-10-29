import React from "react";
import { useNavigate } from 'react-router-dom';

const Error = ({message}) => {
    const navigate = useNavigate();
    console.log(message)
    return(
    <div>
        <h4>Error</h4>
        <div>
            <h5>{message}</h5>
            <button onClick={() => navigate(-1)}>Regresar</button>
        </div>

    </div>
    )
}

export { Error }