import React, { useCallback, useState } from 'react';
import '../styles/login.css'
import { Navigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { authManager } from '../authetication/authenticationManager';

const Login = () => {
    //const navigate = useNavigate(
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [toHome, setToHome] = React.useState(false);
    const [error, setError] = React.useState(false);
    if (toHome === true) {
        return <Navigate to="/pacientes" />;
     }
    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log('userName: ' + userName);
        const token = await authManager.login(userName, password);
        if(token)
            setToHome(true);
        else
            setError(true);

    };
    return (
        <div className="wrapper">
            <h2 className="mb-4 font-weight-bold">Ingresar</h2>
            <form onSubmit={handleSubmit} >

                <hr />
                {error && <Alert variant='warning'>Contraseña ioncorrecta</Alert>}
                <div className="form-group">
                    <label className="control-label">
                        Usuario
                    </label>
                    <input type='text'
                        className='form-control'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">
                        Contraseña
                    </label>
                    <input  className='form-control'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </div>
                <div className="form-group">
                    <div className="mt-4">
                        <input className='btn-primary' type="submit" value="Iniciar sesión" />

                    </div>
                </div>
            </form>
        </div>
    );
}

export { Login };