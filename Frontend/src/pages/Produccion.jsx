import { useEffect, useState } from "react";
import { registrarProduccion, obtenerProducciones } from "../api/produccion";

function Produccion({ setPagina }) {
    const [fecha, setFecha] = useState("");
    const [panSal, setPanSal] = useState("");
    const [panDulce, setPanDulce] = useState("");

    const [producciones, setProducciones] = useState([]);

    useEffect(() => {
        async function cargarProducciones() {
            try {
                const data = await obtenerProducciones();
                setProducciones(data);
            } catch (error) {
                alert(error.message);
            }
        }

        cargarProducciones();
    }, []);

    const guardarProduccion = async (e) => {
        e.preventDefault();

        try {
            const produccion = {
                fecha: fecha,
                pan_sal_producido: Number(panSal),
                pan_dulce_producido: Number(panDulce)
            };

            const data = await registrarProduccion(produccion);
            console.log(data);

            alert("Producción registrada correctamente");

            const produccionesActualizadas =
                await obtenerProducciones();

            setProducciones(produccionesActualizadas);

            setFecha("");
            setPanSal("");
            setPanDulce("");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Registrar producción</h2>

            <form onSubmit={guardarProduccion}>
                <label>Fecha:</label>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />

                <label>Pan de sal producido:</label>
                <input
                    type="number"
                    value={panSal}
                    onChange={(e) => setPanSal(e.target.value)}
                    required
                />

                <label>Pan dulce producido:</label>
                <input
                    type="number"
                    value={panDulce}
                    onChange={(e) => setPanDulce(e.target.value)}
                    required
                />

                <button type="submit">
                    Guardar producción
                </button>
            </form>

            <hr />

            <h3>Historial de producción</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Pan sal producido</th>
                        <th>Pan dulce producido</th>
                        <th>Pan sal vendido</th>
                        <th>Pan dulce vendido</th>
                        <th>Pan sal sobrante</th>
                        <th>Pan dulce sobrante</th>
                    </tr>
                </thead>

                <tbody>
                    {producciones.map((produccion) => (
                        <tr key={produccion.id}>
                            <td>{produccion.fecha}</td>
                            <td>{produccion.pan_sal_producido}</td>
                            <td>{produccion.pan_dulce_producido}</td>
                            <td>{produccion.pan_sal_vendido}</td>
                            <td>{produccion.pan_dulce_vendido}</td>
                            <td>{produccion.pan_sal_sobrante}</td>
                            <td>{produccion.pan_dulce_sobrante}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <button onClick={() => setPagina("dashboard")}>
                Volver al menú
            </button>
        </div>
    );
}

export default Produccion;