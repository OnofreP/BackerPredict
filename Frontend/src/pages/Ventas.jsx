import { useState } from "react";
import { registrarVenta } from "../api/ventas";

function Ventas() {
    const [fecha, setFecha] = useState("");
    const [panSal, setPanSal] = useState("");
    const [panDulce, setPanDulce] = useState("");

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

                <button type="submit">Guardar venta</button>
            </form>
            <button onClick={() => window.location.reload()}>
                Volver al menú
            </button>
        </div>
    );
}

export default Ventas;