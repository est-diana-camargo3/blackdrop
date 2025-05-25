<?php
include("conexion.php");




header("Content-Type: application/json");

if (isset($_POST['nombre'])) {
    echo json_encode(["debug" => "Nombre recibido: " . $_POST['nombre']]);
} else {
    echo json_encode(["error" => "No llegó ningún nombre"]);
}
exit;


$nombre = $_POST['nombre'];

// Consultar la cantidad actual
$queryCheck = "SELECT cantidad FROM productos22 WHERE LOWER(nombre) = LOWER($1)";
$resultCheck = pg_query_params($conn, $queryCheck, array($nombre));

if (!$resultCheck || pg_num_rows($resultCheck) === 0) {
    echo json_encode(["error" => "❌ Producto no encontrado."]);
    exit;
}

$row = pg_fetch_assoc($resultCheck);
$cantidadActual = (int)$row['cantidad'];

// Validar que haya inventario suficiente
if ($cantidadActual <= 0) {
    echo json_encode(["error" => "❌ Producto agotado."]);
    exit;
}

// Descontar 1 unidad
$queryUpdate = "UPDATE productos22 SET cantidad = cantidad - 1 WHERE LOWER(nombre) = LOWER($1)";
$resultUpdate = pg_query_params($conn, $queryUpdate, array($nombre));

if (!$resultUpdate) {
    echo json_encode(["error" => "❌ No se pudo actualizar el inventario."]);
} else {
    echo json_encode(["success" => "✅ Producto actualizado correctamente."]);
}

pg_close($conn);
?>
