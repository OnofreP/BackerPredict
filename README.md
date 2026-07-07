# BackerPredict

Sistema de gestión para panaderías desarrollado con FastAPI, React y MariaDB.

## Descripción

BackerPredict es una plataforma diseñada para apoyar la operación diaria de una panadería mediante el registro de producción, ventas y condiciones climáticas.

El sistema permite:

* Registro de producción diaria.
* Registro de ventas.
* Consulta de reportes.
* Generación de reportes completos.
* Integración con Open-Meteo para datos climáticos.
* Autenticación mediante JWT.
* Gestión histórica de información.

## Tecnologías utilizadas

### Backend

* Python
* FastAPI
* SQLAlchemy
* JWT
* Requests

### Frontend

* React
* Vite
* JavaScript

### Base de datos

* MariaDB

### API Externa

* Open-Meteo

---

# Requisitos

Sistema operativo compatible:

* Linux Mint
* Ubuntu

Paquetes requeridos:

* Python 3
* pip
* venv
* Node.js
* npm
* MariaDB

---

# Estructura del proyecto

BackerPredict/

├── Backend/

├── Frontend/

├── Database/

├── setup_linux.sh

├── setup_database_linux.sh

├── iniciar_backend_linux.sh

├── iniciar_frontend_linux.sh

├── iniciar_todo_linux.sh

└── README.md

---

# Instalación

## 1. Clonar repositorio

git clone https://github.com/OnofreP/BackerPredict

cd BackerPredict

## 2. Dar permisos a los scripts

chmod +x setup_linux.sh

chmod +x setup_database_linux.sh

chmod +x iniciar_backend_linux.sh

chmod +x iniciar_frontend_linux.sh

chmod +x iniciar_todo_linux.sh

## 3. Instalar dependencias

./setup_linux.sh

## 4. Configurar base de datos

./setup_database_linux.sh

## 5. Iniciar sistema

./iniciar_todo_linux.sh

---

# Acceso al sistema

## Backend

http://127.0.0.1:8000

## Documentación API

http://127.0.0.1:8000/docs

## Frontend

http://localhost:5173

---

# Funcionalidades principales

## Login

* Inicio de sesión seguro mediante JWT.
* Validación de términos y condiciones.
* Política de privacidad.
* Política de seguridad.

## Producción

* Registro de producción diaria.
* Consulta de historial.
* Gestión de sobrantes.

## Ventas

* Registro de ventas.
* Actualización por fecha.
* Cálculo automático de ingresos.

## Clima

* Consulta automática mediante Open-Meteo.
* Registro histórico.
* Prevención de duplicados por fecha.

## Reportes

* Reporte resumen.
* Reporte completo.
* Integración de ventas, producción y clima.

---

# Seguridad

BackerPredict implementa:

* Contraseñas cifradas mediante hash.
* Autenticación JWT.
* Control de acceso por usuario.
* Protección de rutas privadas.

---

# Estado del proyecto

Versión actual:

BackerPredict Beta 1

Estado:

* Base de datos: Completa
* Backend: Completo
* Frontend: Completo
* Integración: Completa
* Scripts Linux: Completos

Próximas versiones:

* Empaquetado ejecutable.
* IA predictiva.
* Dashboard avanzado.
* Análisis estadístico.

---

# Autor

Eduardo Onofre Plata

Ingeniería en Sistemas Computacionales
