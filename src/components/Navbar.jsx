// src/components/Navbar.jsx
const Navbar = () => {
    const handleLogout = () => {
        // CAMBIO: Aquí es donde se "cierra" la sesión
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('username');
        
        // Redirigir al login
        window.location.href = '/login';
    };

    // Verificamos si hay token para saber si mostrar el botón
    const isLogged = localStorage.getItem('token') !== null;

    return (
        <nav>
            {isLogged ? (
                <button onClick={handleLogout}>Cerrar Sesión</button>
            ) : (
                <span>No has iniciado sesión</span>
            )}
        </nav>
    );
};

export default Navbar;