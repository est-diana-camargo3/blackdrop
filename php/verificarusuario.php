<?php
include("conexion.php"); // Asegúrate de tener un archivo con la conexión a la base de datos
header("Content-Type: application/json");


$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$tipodeusuario = $_POST['tipodeusuario'];

// Buscar si el usuario existe
$query = "SELECT correo, tipodeusuario FROM usuarios22 WHERE correo = $1 AND contrasena = $2 AND tipodeusuario = $3";
$resultado = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario));

if (!$resultado) {
    die("❌ Error en la consulta SQL: " . pg_last_error($conn));
}



if (pg_num_rows($resultado) > 0) 
    {
        $usuario = pg_fetch_assoc($resultado);

        // ✅ Redirección según el tipo de usuario
        if ($usuario['tipodeusuario'] === 'cliente') 
        {
            header("Location: ../html/4paginacliente.html");
            $respuesta = [
            "exito" => true,
            "correo" => $usuario['correo'],
            "mensaje" => "❌ Autenticacion de cliente correcta"];
            
            exit;
        } elseif ($usuario['tipodeusuario'] === 'administrador') 
        {
            header("Location: ../html/3paginaadministrador.html");
            $respuesta = [
            "exito" => true,
            "correo" => $usuario['correo'],
            "mensaje" => "❌ Autenticacion de administrador correcta"];
           
            exit;
        }
        
    } 
else 
    $respuesta = [
        "exito" => false,
        "mensaje" => "❌ Usuario o contraseña incorrectos"
    ];
    header("Location: ../html/2indexdellogin.html");

    

// 🔧 Agrega esta línea para depurar:
header("Content-Type: application/json");
echo json_encode($respuesta);
?>