import { useEffect, useState } from "react";
import { obtenerReporte } from "../api/reportes";

function Reportes() {
    const [reporte, setReporte] = useState(null);

    useEffect(() => {
        async function cargarReporte() {
            try {
                const data = await obtenerReporte();
                setReporte(data);
            } catch (error) {
                alert(error.message);
            }
        }

        cargarReporte();
    }, []);

    if (!reporte) {
        return <p>Cargando reporte...</p>;
    }

    return (
        <div>
            <h2>Reporte general</h2>

            <p>Pan de sal vendido: {reporte.total_pan_sal_vendido}</p>
            <p>Pan dulce vendido: {reporte.total_pan_dulce_vendido}</p>
            <p>Ingresos totales: ${reporte.ingresos_totales}</p>

            <p>Pan de sal producido: {reporte.total_pan_sal_producido}</p>
            <p>Pan dulce producido: {reporte.total_pan_dulce_producido}</p>

            <p>Pan de sal sobrante: {reporte.total_pan_sal_sobrante}</p>
            <p>Pan dulce sobrante: {reporte.total_pan_dulce_sobrante}</p>
            <button onClick={() => window.location.reload()}>
                Volver al menú
            </button>
        </div>
        
    );
}

export default Reportes;