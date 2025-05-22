<?php
$host = "dpg-d0huho24d50c73atua80-a.oregon-postgres.render.com";
$db = "bdclientes_cajy";
$user = "admin";
$pass = "ZduqhhOYRyT84vE9dPpwowsLucS1Zl4q";
$port = "5432";

header("Content-Type: application/json");

$conn = pg_connect("host=$host dbname=$db user=$user password=$pass port=$port");

if (!$conn) {
    echo json_encode(["error" => "❌ No se pudo conectar a la base de datos."]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

$nombre = $input["nombre"];
$precio = $input["precio"];
$imagen = $input["imagen"];
$descripcion = $input["descripcion"];
$cantidad = $input["cantidad"];

// Verificar si ya existe
$check = pg_query_params($conn, "SELECT 1 FROM productos WHERE nombre = $1", [$nombre]);
if (pg_num_rows($check) > 0) {
    echo json_encode(["error" => "❌ El producto ya existe."]);
    exit;
}

// Insertar
$query = "INSERT INTO productos (nombre, precio, imagen, descripcion, cantidad) VALUES ($1, $2, $3, $4, $5)";
$result = pg_query_params($conn, $query, [$nombre, $precio, $imagen, $descripcion, $cantidad]);

if ($result) {
    echo json_encode(["message" => "✅ Producto registrado correctamente."]);
} else {
    echo json_encode(["error" => "❌ Error al registrar el producto."]);
}

pg_close($conn);
?>

