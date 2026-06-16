import API_URL from "../services/api";

export async function registrarProduccion(produccion) {
    const token = localStorage.getItem("token");
    
    const response = await fetch(`${API_URL}/produccion/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(produccion)
    });

    if (!response.ok) {
        throw new Error("Error al registrar producción");
    }

    return await response.json();
}