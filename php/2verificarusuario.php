<?php
ob_start();  // Iniciar el buffer

// Mostrar errores en desarrollo
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Encabezado JSON
header("Content-Type: application/json");

// Validar que las claves existan
$correo = $_POST['correo'] ?? null;
$contrasena = $_POST['contrasena'] ?? null;
$tipodeusuario = $_POST['tipodeusuario'] ?? ($_POST['tipodecuenta'] ?? null);

// Manejo de errores por falta de datos
if (!$correo || !$contrasena || !$tipodeusuario) {
    ob_clean(); // 🔁 Limpiar el buffer antes de enviar la respuesta
    echo json_encode(["exito" => false, "mensaje" => "❌ Faltan datos en la solicitud."]);
    exit;
}

// Conexión a base de datos
include("conexion.php");

// Consulta
$query = "SELECT * FROM usuarios22 WHERE correo = $1 AND contrasena = $2 AND tipodeusuario = $3";
$result = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario));

// 🔁 Limpiar buffer antes de imprimir JSON
ob_clean();

if ($result && pg_num_rows($result) === 1) {
    echo json_encode([
        "exito" => true,
        "correo" => $correo,
        "redireccion" => ($tipodeusuario === "cliente") ? "/html/4paginacliente.html" : "../html/6paginaadmin.html"
    ]);
} else {
    echo json_encode(["exito" => false, "mensaje" => "❌ Usuario o contraseña incorrectos"]);
}

pg_close($conn);
exit;
