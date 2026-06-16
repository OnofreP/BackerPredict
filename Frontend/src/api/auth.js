import API_URL from "../services/api";

export async function login(nombre, password) {
    const formData = new URLSearchParams();

    formData.append("username", nombre);
    formData.append("password", password);

    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
    });

    if (!response.ok) {
        throw new Error("Usuario o contraseña incorrectos");
    }

    const data = await response.json();

    localStorage.setItem("token", data.access_token);

    return data;
}