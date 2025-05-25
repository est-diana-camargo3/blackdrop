<?php
ob_start();
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

if (!$correo || !$contrasena || !$tipodeusuario) {
    echo json_encode(["exito" => false, "mensaje" => "❌ Faltan datos en la solicitud."]);
    exit;
}

// Aquí iría tu conexión a la base de datos
include("conexion.php");

// Consulta de validación (ajusta según tu base de datos)
$query = "SELECT * FROM usuarios22 WHERE correo = $1 AND contrasena = $2 AND tipodeusuario = $3";
$result = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario));

if ($result && pg_num_rows($result) === 1) {
    echo json_encode([
        "exito" => true,
        "correo" => $correo,
        "redireccion" => ($tipodeusuario === "cliente") ? "../html/4paginacliente.html" : "../html/6paginaadmin.html"
    ]);
} else {
    echo json_encode(["exito" => false, "mensaje" => "❌ Usuario o contraseña incorrectos"]);
}

pg_close($conn);
ob_clean();
?>
