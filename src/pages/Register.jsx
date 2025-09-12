import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de validación y registro
        alert('Registro enviado');
    };

    return (
        <div className="register-bg">
            <form className="register-form" onSubmit={handleSubmit}>
                <p className="form-title">Crear cuenta</p>
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