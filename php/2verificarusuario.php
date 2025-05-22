<?php
require_once("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $tipodecuenta = $_POST['tipodecuenta'];

    // Consulta a la base de datos
    $sql = "SELECT * FROM usuarios WHERE correo='$correo' AND contrasena='$contrasena' AND tipodeusuario='$tipodecuenta'";
    $resultado = mysqli_query($conn, $sql);

    if ($fila = mysqli_fetch_assoc($resultado)) {
        // Verifica tipo de usuario para redireccionar y mostrar mensaje adecuado
        $respuesta = [
            "exito" => true,
            "correo" => $fila['correo'],
        ];

        if ($fila['tipodeusuario'] == "administrador") {
            $respuesta["mensaje"] = "✅ Autenticacion de administrador correcta.";
            $respuesta["redireccion"] = "../html/3paginaadministrador.html";
        } elseif ($fila['tipodeusuario'] == "cliente") {
            $respuesta["mensaje"] = "✅ Autenticacion de cliente correcta.";
            $respuesta["redireccion"] = "../html/4paginacliente.html";
        }

        echo json_encode($respuesta);
    } else {
        echo json_encode([
            "exito" => false,
            "mensaje" => "❌ Usuario o contraseña incorrectos."
        ]);
    }

    mysqli_close($conn);
}
?>
