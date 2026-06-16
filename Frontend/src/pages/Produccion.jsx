import {useState} from "react";
import { registrarProduccion } from "../api/produccion";

function Produccion() {
    const [fecha, setFecha] = useState("");
    const [panSal, setPanSal] = useState("");
    const [panDulce, setPanDulce] = useState("");

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

                <button type="submit">Guardar producción</button>
            </form>
            <button onClick={() => window.location.reload()}>
                Volver al menú
            </button>
        </div>
    );
}

export default Produccion;