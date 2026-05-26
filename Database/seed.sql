USE bakerpredict;

INSERT INTO usuarios (
    nombre,
    correo,
    password_hash,
    rol
)
VALUES (
    'Administrador',
    'admin@bakerpredict.com',
    'pendiente_hash_jwt',
    'admin'
);