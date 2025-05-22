<?php
include("conexion.php"); // Asegúrate de tener un archivo con la conexión a la base de datos
header("Content-Type: application/json");


$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$tipodeusuario = $_POST['tipodeusuario'];

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
        if ($usuario['tipodeusuario'] === 'admin') 
                {
                    //header("Location: ../html/3paginaadministrador.html");
                    $respuesta = 
                                [
                                    "exito" => true,
                                    "correo" => $usuario['correo'],
                                    //"mensaje" => "✅ Autenticacion de administrador correcta"
                                ];  
                    //asi saco un mensaje en forma de alert desde php 💛💛💛💙💙💙❤️❤️❤️
                    // Redirijo a la pagina del administrador
                    // Paso por url el correo del cliente...para darle la bienvenida
                    echo "<script>
                            alert('✅ ADMINISTRADOR logueado correctamente.');
                            window.location.href = '../html/3paginaadministrador?correo=" . urlencode($correo) . "';
                         </script>";
                                       
                    exit;
                } 
        else if ($usuario['tipodeusuario'] === 'cliente') 
                {
                    //header("Location: ../html/4paginacliente.html");
                    $respuesta = 
                                [
                                    "exito" => true,
                                    "correo" => $usuario['correo'],
                                    //"mensaje" => "✅ Autenticacion de cliente correcta"
                                ];  
                                //asi saco un mensaje en forma de alert desde php 💛💛💛💙💙💙❤️❤️❤️
                    // Redirijo a la pagina del administrador
                    // Paso por url el correo del cliente...para darle la bienvenida
                    echo "<script>
                            alert('✅ CLIENTE logueado correctamente.');
                            window.location.href = '../html/4paginacliente?correo=" . urlencode($correo) . "';
                         </script>";            
                    exit;
                }        
    } 
else 
    $respuesta = [
                    "exito" => false,
                    //"mensaje" => "❌ Usuario o contraseña incorrectos"
                 ];
                 echo "<script>
                            alert('❌ Usuario o contraseña incorrectos');
                            window.location.href = '../html/2indexdellogin';
                         </script>";            
                    exit;   

    

// 🔧 Agrega esta línea para depurar:
header("Content-Type: application/json");
echo json_encode($respuesta);
?>