import React from "react";
import { useNavigate } from 'react-router-dom';

const Error = ({error}) => {
    const navigate = useNavigate();
    console.log(error.cause)
    var lb;
    if(error.cause == '401'){
        navigate('/login')
    }
    return(
    <div>
        <h4>Error</h4>
        <div>
            <h5>{error.message}</h5>
            <button onClick={() =>{ 
                if(error.cause == '401'){
                    navigate('/login')
                }
                else{
                    navigate(-1)
                }
            }}>Regresar</button>
        </div>

    </div>
    )
}

export { Error }