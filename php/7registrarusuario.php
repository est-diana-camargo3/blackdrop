<?php
        include("conexion.php"); // Importa la conexión


        $correo = $_POST['correo'];
        $contrasena = $_POST['contrasena'];
        $tipodeusuario = $_POST['tipodeusuario'];


        // Procesar imagen
        /*$foto_nombre = $_FILES['foto']['name'];
        $foto_tmp = $_FILES['foto']['tmp_name'];
        $ruta_destino = "../uploads/" . $foto_nombre;

        if (!file_exists("../uploads")) {
            mkdir("../uploads", 0777, true);
        }

        move_uploaded_file($foto_tmp, $ruta_destino);*/

        // Comprobar si el correo ya existe en la base de datos
        $consulta_existe = "SELECT 1 FROM usuarios22 WHERE correo = $1";
        $resultado_existe = pg_query_params($conn, $consulta_existe, array($correo));

        if (pg_num_rows($resultado_existe) > 0) {
            echo "<script>
                    alert('❌ Este correo ya está registrado. Intenta con otro.');
                    window.location.href = '../html/7paginaregistrarse.html'; // Redirige al formulario
                </script>";
            exit;
        }

        // Comprobar SINO existe el correo en la base de datos, LO INSERTO o registro en la base de datos.
        $query = "INSERT INTO usuarios22 (correo, contrasena, tipodeusuario) VALUES ($1, $2, $3)";
        $resultado = pg_query_params($conn, $query, array($correo, $contrasena, $tipodeusuario));

            //si se puede la inserción o registro se puede realizar.
            if ($resultado) 
            {
                // y es un cliente...
                // Saque un aviso que diga CLIENTE registrado correctamente y redirija a la pagina de cliente  
                if ($tipodeusuario==='cliente') 
                {
                    //asi saco un mensaje en forma de alert desde php 💛💛💛💙💙💙❤️❤️❤️
                    echo "<script>
                        alert('✅ CLIENTE registrado correctamente .');
                        localStorage.setItem('correo', '" . $correo . "');  // Guarda el correo
                        window.location.href = '../html/4paginacliente.html'; // Redirige a la pagina del cliente 
                    </script>";
                }
                // y es un administrador...
                // Saque un aviso que diga ADMINISTRADOR registrado correctamente y redirija a la pagina de administrador
                else if ($tipodeusuario==='administrador') 
                {
                    echo "<script>
                        alert('✅ ADMINISTRADOR registrado correctamente .');
                        localStorage.setItem('correo', '" . $correo . "');  // Guarda el correo
                        window.location.href = '../html/3paginaadministrador.html'; // Redirige al la pagina de administrador
                    </script>";
                }     
            } 
            //si la insercion o registro NO se puede realizar, por problemas de pc o wifi.
            else 
            {
                echo "Error al registrar: " . pg_last_error($conn);
            }

        pg_close($conn);
?>
