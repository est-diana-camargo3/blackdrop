<?php
include("conexion.php");
header("Content-Type: application/json");

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$tipodeusuario = $_POST['tipodeusuario'];

$query = "SELECT correo, tipodeusuario FROM usuarios22 WHERE correo = $1 AND contrasena = $2 AND tipodeusuario= $3";
$resultado = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario));

if (!$resultado) {
    echo json_encode([
        "exito" => false,
        "error" => "Error en la consulta SQL"
    ]);
    exit;
}

if (pg_num_rows($resultado) > 0) {
    $usuario = pg_fetch_assoc($resultado);

    echo json_encode([
        "exito" => true,
        "tipo" => $usuario['tipodeusuario'],
        "correo" => $usuario['correo']
    ]);
    exit;
} else {
    echo json_encode([
        "exito" => false,
        "error" => "Usuario o contraseña incorrectos"
    ]);
    exit;
}

?>