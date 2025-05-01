/* Javascript - JS */
/* Aqui estan todas las aplicaciones, efectos animaciones validaciones de formularios ...*/
/* Es decir que al tocar esta pared prenda un bombillo...y asi con todas sus interacciones  */ 
/*aqui encontraremos "todo" en funciones, con condicionales, whiles, ifs...que se ejecutaran cuando "un boton" se presione
o cuando algo pase*/

/*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓                                                                                                                           ▓▓
▓▓                              J S    -  J A V A S C R I P T     - I N T E R A C C I O N E S                                ▓▓
▓▓                                                                                                                           ▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ */


  /*  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      █                                            B a s e   d e   d a t o s   s i m u l a d a                                                        █
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */

      const usuarios = 
      [
          { correo: "clientemujer@correo.com", contraseña: "1234", tipo: "cliente" , foto: "imagenes/fotosdeperfil/fotodeclientemujer.jpg"},
          { correo: "clientehombre@correo.com", contraseña: "1234", tipo: "cliente" , foto: "imagenes/fotosdeperfil/fotodeclientehombre.jpg"},
          { correo: "admin@correo.com", contraseña: "1234", tipo: "administrador" ,foto: "imagenes/fotosdeperfil/fotodeadministrador.jpg"},
          { correo: "mayerly@correo.com", contraseña: "1234", tipo: "administrador" ,foto: "imagenes/fotosdeperfil/fotodemayerly.jpg"},
          { correo: "juanita@correo.com", contraseña: "1234", tipo: "administrador" ,foto: "imagenes/fotosdeperfil/fotosdejuanita.jpg"}
      ];


      // Evento al hacer clic en Iniciar Sesión
      document.querySelector(".botoniniciarsesion").addEventListener("click", function() {
      const correoInput = document.querySelector(".inputcorreo").value.trim();
      const contraseñaInput = document.querySelector(".inputcontraseña").value.trim();
      const tipoSeleccionado = document.querySelector('input[name="tipo_cuenta"]:checked');

      // Validación de campos
      if (!correoInput || !contraseñaInput || !tipoSeleccionado) {
      alert("Por favor completa todos los campos y selecciona el tipo de cuenta.");
      return;
      }

      const tipoCuenta = tipoSeleccionado.id === "cliente" ? "cliente" : "administrador";

      // Buscar usuario en la "base de datos"
      const usuarioEncontrado = usuarios.find(usuario =>
      usuario.correo === correoInput &&
      usuario.contraseña === contraseñaInput &&
      usuario.tipo === tipoCuenta
      );

      if (usuarioEncontrado) {
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
      alert(`✅ Login correcto \n\n ✅ Bienvenido: ${usuarioEncontrado.correo}`);

      const urlParams = new URLSearchParams(window.location.search);
      const redirect = urlParams.get('redirect');

      if (tipoCuenta === "cliente") {
      if (redirect === "carrito") {
      window.location.href = '../5carritodecompras.html';
      } else {
      window.location.href = '../4paginacliente.html';
      }
      } else if (tipoCuenta === "administrador") {
      window.location.href = '../3paginaadministrador.html';
      }

      } else {
      // Si no encuentra el usuario, muestra ejemplos
      alert("❌ Correo, contraseña o tipo de cuenta incorrectos.\n\n✅ Ejemplo válido:\nCorreo: clientemujer@correo.com\nContraseña: 1234\nTipo: cliente\n\n✅ Otro válido:\nCorreo: clientehombre@correo.com\nContraseña: 1234\nTipo:cliente\n\n✅ Otro válido:\nCorreo: admin@correo.com\nContraseña: 1234\nTipo: administrador");
      }

      });


 /*   ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      █                                              B o t ó n   a t r á s                                                   █
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */

      // 📌 Evento para el botón "Atrás"
      let botonAtras = document.querySelector(".contenedoriconoatras");
      if (botonAtras) {
      botonAtras.addEventListener("click", function () {
      window.location.href = "index.html"; // Redirige a la página principal
      });
      }


