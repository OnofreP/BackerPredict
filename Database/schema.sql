CREATE DATABASE IF NOT EXISTS bakerpredict;
USE bakerpredict;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol ENUM('admin','usuario') DEFAULT 'admin',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    pan_sal_vendido INT DEFAULT 0,
    pan_dulce_vendido INT DEFAULT 0,
    ingreso_total DECIMAL(10,2) DEFAULT 0.00,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produccion_diaria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    pan_sal_producido INT DEFAULT 0,
    pan_dulce_producido INT DEFAULT 0,
    pan_sal_vendido INT DEFAULT 0,
    pan_dulce_vendido INT DEFAULT 0,
    pan_sal_sobrante INT DEFAULT 0,
    pan_dulce_sobrante INT DEFAULT 0,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clima_historico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    temperatura DECIMAL(5,2),
    humedad DECIMAL(5,2),
    lluvia BOOLEAN DEFAULT FALSE,
    descripcion VARCHAR(100)
);