<?php
$usuario = $_POST['usuario'] ?? '';
$contrasena = $_POST['contrasena'] ?? '';

// Conexión a la base de datos
$conexion = new mysqli("localhost", "root", "1234", "prueba");

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Insertar datos (usa consultas preparadas en producción)
$sql = "INSERT INTO logins (usuario, contrasena) VALUES ('$usuario', '$contrasena')";
if ($conexion->query($sql) === TRUE) {
    echo "Datos guardados";
} else {
    echo "Error: " . $conexion->error;
}

$conexion->close();
?>
