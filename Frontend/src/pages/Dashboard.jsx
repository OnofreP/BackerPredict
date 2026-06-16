function Dashboard({setPagina}) {
    return (
        <div>
            <h1>BakerPredict</h1>
            <p>Panel principal del sistema</p>

            <button onClick = {() => setPagina("ventas")}>Ventas</button>
            <button onClick = {() => setPagina("produccion")}>Producción</button>
            <button onClick = {() => setPagina("reportes")}>Reportes</button>
            <button onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
            }}>
                Cerrar sesión
            </button>
        </div>
    );
}

export default Dashboard;