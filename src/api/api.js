// src/api/api.js
const API_URL = 'http://localhost:8097/api';

export const fetchProtegido = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // AQUÍ INYECTAMOS EL TOKEN
        ...options.headers
    };

    const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    
    if (response.status === 401 || response.status === 403) {
        alert("Sesión expirada o no autorizada");
        localStorage.clear();
        window.location.href = '/login';
    }
    
    return response;
};