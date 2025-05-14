<?php
        $host = "dpg-d0huho24d50c73atua80-a.oregon-postgres.render.com/bdclientes_cajy"; 
         $db = "bdclientes_cajy";
        $user = "admin";
        $pass = "ZduqhhOYRyT84vE9dPpwowsLucS1Zl4q";
        $port = "5432";

        // Conexión a PostgreSQL
        $conn = pg_connect("host=$host dbname=$db user=$user password=$pass port=$port");

        if (!$conn) {
            die("Error al conectar: " . pg_last_error());
        }

        $correo = $_POST['correo'];
        $contrasena = $_POST['contrasena'];
        $tipodeusuario = $_POST['tipodeusuario'];

        // Procesar imagen
        $foto_nombre = $_FILES['foto']['name'];
        $foto_tmp = $_FILES['foto']['tmp_name'];
        $ruta_destino = "../uploads/" . $foto_nombre;

        if (!file_exists("../uploads")) {
            mkdir("../uploads", 0777, true);
        }

        move_uploaded_file($foto_tmp, $ruta_destino);

        $query = "INSERT INTO usuarios22 (correo, contrasena, tipodeusuario, foto) VALUES ($1, $2, $3, $4)";
        $resultado = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario, $ruta_destino));

        if ($resultado) {
            echo "Registro exitoso.";
            // redirigir al home logueado
             header("Location: /html/4paginacliente.html");
        } else {
            echo "Error al registrar: " . pg_last_error($conn);
        }

        pg_close($conn);
?>
