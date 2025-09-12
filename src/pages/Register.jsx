import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir
import { registerUser } from '../utils/database'; // Importamos la función de registro
import '../styles/Register.css';

const Register = () => {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState(null); // Usamos una sola variable para mensaje
    const [messageType, setMessageType] = useState(''); // Error o éxito
    const navigate = useNavigate(); // Hook de React Router para redirigir

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de que las contraseñas coincidan
        if (form.password !== form.confirmPassword) {
            setMessage("Las contraseñas no coinciden.");
            setMessageType('error');
            return;
        }

        // Simulamos el registro del usuario
        const result = registerUser({
            nombre: form.nombre,
            apellido: form.apellido,
            email: form.email,
            password: form.password,
        });

        // Si el registro fue exitoso
        if (result.success) {
            setMessage(result.message); // Mensaje de éxito
            setMessageType('success');
            setTimeout(() => navigate('/'), 1500); // Redirige a la página principal después de 1.5s
        } else {
            setMessage(result.message); // Mensaje de error
            setMessageType('error');
        }
    };

    return (
        <div className="register-bg">
            <form className="register-form" onSubmit={handleSubmit}>
                <p className="form-title">Crear cuenta</p>

                {/* Mostramos la alerta solo si existe un mensaje */}
                {message && (
                    <div className={messageType === 'error' ? 'error-message' : 'success-message'}>
                        {message}
                    </div>
                )}

                <div className="input-container">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={form.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar contraseña"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit">
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default Register;
