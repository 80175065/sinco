<?php
$usuario = $_POST['usuario'] ?? '';
$contrasena = $_POST['contrasena'] ?? '';

// Conexión a la base de datos MySQL
$conn = new mysqli("localhost", "root", "1234", "prueba");

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "INSERT INTO autenticacion (usuario, contrasena) VALUES ('$usuario', '$contrasena')";
if ($conn->query($sql) === TRUE) {
    echo "✅ Usuario registrado con éxito.";
} else {
    echo "❌ Error al registrar: " . $conn->error;
}

$conn->close();
?>
