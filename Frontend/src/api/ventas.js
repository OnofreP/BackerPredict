import API_URL from "../services/api";

export async function registrarVenta(venta) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/ventas/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(venta)
    });

    if (!response.ok) {
        throw new Error("Error al registrar venta");
    }

    return await response.json();
}
export async function obtenerVentas() {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/ventas/`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Error al obtener ventas");
    }

    return await response.json();
}