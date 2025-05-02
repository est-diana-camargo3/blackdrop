
                function registrarUsuario() {
                    const correo = document.getElementById('correo').value;
                    const constrasena = document.getElementById('contrasena').value;
                    /*const archivoFoto = document.getElementById('foto').files[0];*/

                    if (!correo  ) {
                        alert('Debes escribir correo ');
                        return;
                    }
                    if (!constrasena ) {
                        alert('Debes escribir contrasena ');
                        return;
                    }
                    /*if (!foto) {
                        alert("Debes cargar una foto.");
                        return;
                    }*/

                    const lector = new FileReader();
                    lector.onload = function (e) {
                        const nuevaFotoBase64 = e.target.result;
                        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

                        const nuevoUsuario = {
                            correo: correo,
                            constrasena: constrasena,
                            /*foto: nuevaFotoBase64,*/
                            tipo: "cliente"
                        };

                        usuarios.push(nuevoUsuario);
                        localStorage.setItem('usuarios', JSON.stringify(usuarios));

                        alert('✅ Datos actualizados exitosamente');
                        // Puedes redirigir después si quieres
                        window.location.href = '4paginacliente.html';
                    };

                    /*lector.readAsDataURL(archivoFoto);*/
                }