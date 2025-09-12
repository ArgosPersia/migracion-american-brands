import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const iniciarSesion = () => {
    };

    return (
        <div className="login-bg">
            <form className="form">
                <p className="form-title">Inicia sesión en tu cuenta</p>
                <div className="input-container">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="correo electrónico"
                    />
                    <span></span>
                </div>
                <div className="input-container">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Contraseña"
                    />
                </div>
                <button onClick={iniciarSesion} type="button" className="submit">
                    Iniciar sesión
                </button>
                <p className="signup-link">
                    No tienes cuenta?
                    <Link to="/registro">registrate</Link> {/* Cambia aquí */}
                </p>
            </form>
        </div>
    );
};

export default Login;