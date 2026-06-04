USE bakerpredict;

INSERT INTO usuarios (
    nombre,
    password_hash,
    rol
)
VALUES (
    'admin',
    'pendiente_hash_jwt',
    'admin'
);