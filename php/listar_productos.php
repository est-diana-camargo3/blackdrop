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

$query = "SELECT * FROM productos22 ORDER BY nombre";
$result = pg_query($conn, $query);

if (!$result) {
    echo json_encode(["error" => "❌ Error al obtener los productos."]);
    pg_close($conn);
    exit;
}

$productos = [];

while ($row = pg_fetch_assoc($result)) {
    $productos[] = $row;
}

echo json_encode($productos);

pg_close($conn);
?>
