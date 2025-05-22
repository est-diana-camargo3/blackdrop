<?php
include("conexion.php"); // Asegúrate de tener un archivo con la conexión a la base de datos
ob_start();
header("Content-Type: application/json");

$correo = isset($_POST['correo']) ? $_POST['correo'] : null;
$contrasena = isset($_POST['contrasena']) ? $_POST['contrasena'] : null;
$tipodeusuario = isset($_POST['tipodeusuario']) ? $_POST['tipodeusuario'] : null;


// Buscar si el usuario existe
$query = "SELECT correo, tipodeusuario FROM usuarios22 WHERE correo = $1 AND contrasena = $2 AND tipodeusuario= $3";
$resultado = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario));

// Si el usuario no existe 
if (!$resultado) {
    die("❌ Error en la consulta SQL: " . pg_last_error($conn));
}

// Si el usuario si existe
if (pg_num_rows($resultado) > 0) 
    {
        $usuario = pg_fetch_assoc($resultado);

        // Redirección según el tipo de usuario
        if ($usuario['tipodeusuario'] === 'administrador') 
                {
                    header("Location: ../html/3paginaadministrador.html");
                    $respuesta = 
                                [
                                    "exito" => true,
                                    "correo" => $usuario['correo'],
                                    "mensaje" => "✅ Autenticacion de administrador correcta"
                                ]; 
                    echo "<script>
                            alert('✅ Autenticacion de administrador correcta.');
                            
                         </script>"; 
                    /*window.location.href = '../html/4paginacliente.html?correo=" . urlencode($correo) . "';*/                  
                    exit;
                } 
        else if ($usuario['tipodeusuario'] === 'cliente') 
                {
                    header("Location: ../html/4paginacliente.html");
                    $respuesta = 
                                [
                                    "exito" => true,
                                    "correo" => $usuario['correo'],
                                    "mensaje" => "✅ Autenticacion de cliente correcta"
                                ];              
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




