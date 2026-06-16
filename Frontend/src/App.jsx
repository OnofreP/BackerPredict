import {useState} from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ventas from "./pages/Ventas";
import Produccion from "./pages/Produccion";
import Reportes from "./pages/Reportes";

function App() {
    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [pagina, setPagina] = useState("dashboard");

    if (!token) {
        return <Login />;
    }
    if (pagina === "ventas") {
        return <Ventas />;
    }
    if (pagina === "produccion") {
        return <Produccion />;
    }
    if (pagina === "reportes") {
    return <Reportes />;
    }  
    return <Dashboard setPagina={setPagina} />;
}

export default App;