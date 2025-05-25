<?php
include("conexion.php");
header("Content-Type: application/json");

if (!isset($_POST['nombre']) || empty($_POST['nombre'])) {
    echo json_encode(["error" => "❌ No se recibió el nombre del producto."]);
    exit;
}

$nombre = $_POST['nombre'];
$cantidadSolicitada = isset($_POST['cantidad']) ? (int)$_POST['cantidad'] : 1;

if ($cantidadSolicitada <= 0) {
    echo json_encode(["error" => "❌ Cantidad inválida."]);
    exit;
}

// Consultar la cantidad actual del producto
$queryCheck = "SELECT cantidad FROM productos22 WHERE LOWER(nombre) = LOWER($1)";
$resultCheck = pg_query_params($conn, $queryCheck, array($nombre));

if (!$resultCheck) {
    echo json_encode(["error" => "❌ Falló la consulta SELECT"]);
    pg_close($conn);
    exit;
}

if (pg_num_rows($resultCheck) === 0) {
    echo json_encode(["error" => "❌ Producto no encontrado."]);
    pg_close($conn);
    exit;
}

$row = pg_fetch_assoc($resultCheck);
$cantidadActual = (int)$row['cantidad'];

// Validar que haya suficiente inventario
if ($cantidadActual < $cantidadSolicitada) {
    echo json_encode(["error" => "❌ Stock insuficiente para '$nombre'. Solo quedan $cantidadActual unidades."]);
    pg_close($conn);
    exit;
}

// Descontar la cantidad solicitada
$queryUpdate = "UPDATE productos22 SET cantidad = cantidad - $1 WHERE LOWER(nombre) = LOWER($2)";
$resultUpdate = pg_query_params($conn, $queryUpdate, array($cantidadSolicitada, $nombre));

if (!$resultUpdate) {
    echo json_encode(["error" => "❌ No se pudo actualizar el inventario."]);
} else {
    echo json_encode(["success" => "✅ Se descontaron $cantidadSolicitada unidades de '$nombre'."]);
}

pg_close($conn);
?>
