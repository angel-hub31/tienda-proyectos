import { useEffect, useState } from 'react';
import { fetchProtegido } from '../api/api';

const ProyectosPanel = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const response = await fetchProtegido('/proyectos');
                if (response.ok) {
                    const data = await response.json();
                    setProyectos(data);
                }
            } catch (error) {
                console.error("Error al cargar proyectos:", error);
            }
        };
        cargarDatos();
    }, []);

    return (
        <div>
            <h1>Panel Operacional de Negocio</h1>
            <table>
                <thead>
                    <tr><th>Nombre</th><th>Prioridad</th></tr>
                </thead>
                <tbody>
                    {proyectos.map(p => (
                        <tr key={p.id}><td>{p.nombre}</td><td>{p.prioridad}</td></tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProyectosPanel;