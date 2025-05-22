<?php
$host = "dpg-d0huho24d50c73atua80-a.oregon-postgres.render.com";
$db = "bdclientes_cajy";
$user = "admin";
$pass = "ZduqhhOYRyT84vE9dPpwowsLucS1Zl4q";
$port = "5432";

$conn = pg_connect("host=$host dbname=$db user=$user password=$pass port=$port");

if (!$conn) {
    die("❌ Error de conexión a PostgreSQL: " . pg_last_error());
} else {
    echo "✅ Conexión exitosa a PostgreSQL.";
}
?>

