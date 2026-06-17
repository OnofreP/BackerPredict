import { useEffect, useState } from "react";
import { registrarVenta, obtenerVentas } from "../api/ventas";

function Ventas({ setPagina }) {

    const [fecha, setFecha] = useState("");
    const [panSal, setPanSal] = useState("");
    const [panDulce, setPanDulce] = useState("");

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        async function cargarVentas() {
            try {
                const data = await obtenerVentas();
                setVentas(data);
            } catch (error) {
                alert(error.message);
            }
        }

        cargarVentas();
    }, []);

    const guardarVenta = async (e) => {
        e.preventDefault();

        try {

            const venta = {
                fecha: fecha,
                pan_sal_vendido: Number(panSal),
                pan_dulce_vendido: Number(panDulce)
            };

            const data = await registrarVenta(venta);

            console.log(data);

            alert("Venta registrada correctamente");

            const ventasActualizadas = await obtenerVentas();
            setVentas(ventasActualizadas);

            setFecha("");
            setPanSal("");
            setPanDulce("");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Registrar ventas</h2>

            <form onSubmit={guardarVenta}>

                <label>Fecha:</label>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />

                <label>Pan de sal vendido:</label>
                <input
                    type="number"
                    value={panSal}
                    onChange={(e) => setPanSal(e.target.value)}
                    required
                />

                <label>Pan dulce vendido:</label>
                <input
                    type="number"
                    value={panDulce}
                    onChange={(e) => setPanDulce(e.target.value)}
                    required
                />

                <button type="submit">
                    Guardar venta
                </button>

            </form>

            <hr />

            <h3>Historial de ventas</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Pan de sal</th>
                        <th>Pan dulce</th>
                        <th>Ingreso total</th>
                    </tr>
                </thead>

                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta.id}>
                            <td>{venta.fecha}</td>
                            <td>{venta.pan_sal_vendido}</td>
                            <td>{venta.pan_dulce_vendido}</td>
                            <td>${venta.ingreso_total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <button
                onClick={() => setPagina("dashboard")}
            >
                Volver al menú
            </button>

        </div>
    );
}

export default Ventas;