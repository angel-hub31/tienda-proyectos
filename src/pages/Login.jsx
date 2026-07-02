import { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8097/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) throw new Error("Credenciales incorrectas");

            const data = await response.json();

            // Persistencia en LocalStorage (Evidencia clave para el punto 2.1)
            localStorage.setItem('token', data.token);
            localStorage.setItem('rol', data.rol);
            localStorage.setItem('username', data.username);

            alert("Login exitoso");
            window.location.href = '/'; // Redirigir al inicio
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input name="username" placeholder="Usuario" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;