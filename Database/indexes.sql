USE bakerpredict;

CREATE INDEX idx_ventas_fecha
ON ventas(fecha);

CREATE INDEX idx_produccion_fecha
ON produccion_diaria(fecha);

CREATE INDEX idx_clima_fecha
ON clima_historico(fecha);