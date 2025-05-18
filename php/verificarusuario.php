<?php
include("conexion.php"); // Asegúrate de tener un archivo con la conexión a la base de datos
header("Content-Type: application/json");

var_dump($_POST);
die();

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$tipodeusuario = $_POST['tipodeusuario'];

// Buscar si el usuario existe
$query = "SELECT correo, tipodeusuario FROM usuarios22 WHERE correo = $1 AND contrasena = $2 AND tipodeusuario = $3";
$resultado = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario));


if (pg_num_rows($resultado) > 0) {
    $usuario = pg_fetch_assoc($resultado);
    echo json_encode([
        "exito" => true,
        "correo" => $usuario['correo'],
        "redireccion" => $usuario['tipodeusuario'] == "cliente" ? "../html/4paginacliente.html" : "../html/3paginaadministrador.html"
    ]);
} else {
    echo json_encode(["exito" => false]);
}
?>