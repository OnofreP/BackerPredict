import { useEffect, useState } from "react";
import { obtenerReporte } from "../api/reportes";

function Reportes({setPagina}) {
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
        <div className="reportes-container">
            <h2>Reporte general</h2>

            <div className="reportes-grid">
                <div className="reporte-card">
                    <h3>Pan de sal vendido</h3>
                    <p>{reporte.total_pan_sal_vendido}</p>
                </div>

                <div className="reporte-card">
                    <h3>Pan dulce vendido</h3>
                    <p>{reporte.total_pan_dulce_vendido}</p>
                </div>

                <div className="reporte-card">
                    <h3>Ingresos totales</h3>
                    <p>${reporte.ingresos_totales}</p>
                </div>

                <div className="reporte-card">
                    <h3>Pan de sal producido</h3>
                    <p>{reporte.total_pan_sal_producido}</p>
                </div>

                <div className="reporte-card">
                    <h3>Pan dulce producido</h3>
                    <p>{reporte.total_pan_dulce_producido}</p>
                </div>

                <div className="reporte-card">
                    <h3>Pan de sal sobrante</h3>
                    <p>{reporte.total_pan_sal_sobrante}</p>
                </div>

                <div className="reporte-card">
                    <h3>Pan dulce sobrante</h3>
                    <p>{reporte.total_pan_dulce_sobrante}</p>
                </div>
            </div>
            <h3>Comparativa general</h3>

            <div className="grafica-container">
                <div className="barra-item">
                    <span>Pan sal vendido</span>
                    <div className="barra">
                        <div
                            className="barra-relleno"
                            style={{ width: `${Math.min(reporte.total_pan_sal_vendido / 10, 100)}%` }}
                        ></div>
                    </div>
                    <strong>{reporte.total_pan_sal_vendido}</strong>
                </div>

                <div className="barra-item">
                    <span>Pan dulce vendido</span>
                    <div className="barra">
                        <div
                            className="barra-relleno"
                            style={{ width: `${Math.min(reporte.total_pan_dulce_vendido / 10, 100)}%` }}
                        ></div>
                    </div>
                    <strong>{reporte.total_pan_dulce_vendido}</strong>
                </div>

                <div className="barra-item">
                    <span>Pan sal sobrante</span>
                    <div className="barra">
                        <div
                            className="barra-relleno"
                            style={{ width: `${Math.min(reporte.total_pan_sal_sobrante / 10, 100)}%` }}
                        ></div>
                    </div>
                    <strong>{reporte.total_pan_sal_sobrante}</strong>
                </div>

                <div className="barra-item">
                    <span>Pan dulce sobrante</span>
                    <div className="barra">
                        <div
                            className="barra-relleno"
                            style={{ width: `${Math.min(reporte.total_pan_dulce_sobrante / 10, 100)}%` }}
                        ></div>
                    </div>
                    <strong>{reporte.total_pan_dulce_sobrante}</strong>
                </div>
            </div>

            <button onClick={() => setPagina("dashboard")}>
                Volver al menú
            </button>
        </div>
    );
}

export default Reportes;