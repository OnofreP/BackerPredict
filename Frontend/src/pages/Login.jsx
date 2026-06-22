import React from "react";
import {useState} from "react";
import {login} from "../api/auth";
import {registrarClimaHoy} from "../api/clima";

function Login({setToken}) {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [mostrarTerminos, setMostrarTerminos] = useState(false);
    const [mostrarPrivacidad, setMostrarPrivacidad] = useState(false);
    const [mostrarSeguridad, setMostrarSeguridad] = useState(false);

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                try {
                    const data = await login(nombre, password);
                    await registrarClimaHoy();
                    setToken(data.access_token);
                } catch (error) {
                    alert(error.message);
                }
            }}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {mostrarTerminos && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Términos y Condiciones</h3>
                            <p>
                                BackerPredict es un sistema de apoyo para la gestión operativa de panaderías,
                                permitiendo el registro de ventas, producción y condiciones climáticas.
                            </p>
                            <p>
                                La información registrada es responsabilidad del usuario. Los
                                reportes generados tienen fines informativos y no garantizan
                                resultados comerciales específicos.
                            </p>
                            <button onClick={() => setMostrarTerminos(false)}>Cerrar</button>
                        </div>
                    </div>
                )}

                {mostrarPrivacidad && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Política de Privacidad</h3>
                            <p>
                                Los datos registrados en BackerPredict son utilizados
                                exclusivamente para la operación del sistema.
                            </p>
                            <p>
                                La información de usuarios, ventas, producción y clima no será
                                compartida con terceros. Las contraseñas se almacenan mediante
                                mecanismos de hash y no en texto plano.
                            </p>
                            <button onClick={() => setMostrarPrivacidad(false)}>Cerrar</button>
                        </div>
                    </div>
                )}
                {mostrarSeguridad && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Política de Seguridad</h3>

                            <p>
                                El acceso al sistema se realiza mediante autenticación basada
                                en usuario y contraseña.
                            </p>
                            <p>
                                Las sesiones protegidas utilizan tokens JWT para validar la
                                identidad de los usua
                                Las contraseñas se almacenan utilizando algoritmos de hash
                                seguros y no pueden recuperarse en texto plano.
                            </p>

                            <p>
                                El sistema registra información histórica de ventas,
                                producción y clima para fines operativos y de análisis.
                                Se recomienda realizar respaldos periódicos de la base de
                                datos para garantizar la continuidad operativa.
                            </p>

                            <button onClick={() => setMostrarSeguridad(false)}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
                <div className="legal-links">
                    <button type="button" onClick={() => setMostrarTerminos(true)}>
                        Términos y Condiciones
                    </button>

                    <button type="button" onClick={() => setMostrarPrivacidad(true)}>
                        Política de Privacidad
                    </button>
                    <button type="button" onClick={() => setMostrarSeguridad(true)}>
                        Política de Seguridad
                    </button>
                </div>
                <div className="terms-box">
                    <label>
                        <input
                            type="checkbox"
                            checked={aceptaTerminos}
                            onChange={(e) => setAceptaTerminos(e.target.checked)}
                        />
                        He leído y acepto los Términos y Condiciones y la Política de Privacidad.
                    </label>
                </div>
                <button type="submit" disabled={!aceptaTerminos}>Iniciar sesión</button>
            </form>
        </div>
    );
}
export default Login;