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
      █                                              I n i c i a r    S e s i o n                                            █
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */

      // Evento al hacer clic en el boton Iniciar Sesión
      // copio y selecciono el boton desde html a js y le agrego un listener o escuchador de eventos, para el evento click 
      // y que cuando perciba un clic en el boton ejecute las acciones que estan en la funcion. llamada  
      // validarquetodoelformularioestediligenciado   
      // addEventListener("evento ejm: click", funcionqueeejecutara si hacen click SIN PARENTESIS)
      // si yo coloco addEventListener("click", funciona CON PARENTESIS()); , se ejecutara funciona, asi haya o no clic...no queremos eso 

      document.querySelector(".botoniniciarsesion").addEventListener("click", validarquetodoelformularioestediligenciado);

        function validarquetodoelformularioestediligenciado()
        {
            //copio y selecciono los inputs del formulario html a java 
            let inputcorreoenjava = document.querySelector("#inputcorreoenhtml").value.trim(); // value trim, quita los espacios vacios del valor que escriba el usuario 
            //let contraseñaInput = document.querySelector("#inputcontraseña").value.trim();
            //let tipoSeleccionado = document.querySelector('input[name="tipo_cuenta"]:checked');
            //let tipoCuenta = tipoSeleccionado.id === "cliente" ? "cliente" : "administrador";

            // Validación de campos
            while (!inputcorreoenjava ) //   || !contraseñaInput || !tipoSeleccionado) 
                {
                    alert("Por favor completa todos los campos y selecciona el tipo de cuenta.");
                    return;
                }
                alert(inputcorreoenjava);       
                modificarcookiesinicialescondatosrealesdelusuario(inputcorreoenjava);         
            }


           
        



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





            function Nosequesera()
            {
                alert(correoInput);

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

      };

  /*  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      █   M o d i f i c a r   C o o k i e s   i n i c i a l e s    c o n   d a t o s   R E A L E S   d e l   u s u a r i o   █
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */


              // Crear una cookie especifica 
              function modificarcookiesinicialescondatosrealesdelusuario(inputcorreoenjava)
              {
                  // Crear cookies
                  //let fechadeexpiracion =Thu, 31 Jul 2025 12:00:00 UTC;
  
                  //Modifico la cookie, dandole el valor que tengo en correoInput 
                  //la razon por la que usamos encode es porque eso codifica lo que tiene la variable...osea me lee @, +, =
                  //
                 document.cookie = "cookienombredelusuario=" + encodeURIComponent(inputcorreoenjava) + "; expires=Thu, 31 Jul 2025 12:00:00 UTC; path=/;";
                  //document.cookie = "cookienumerodevisitas=23; expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                  //document.cookie = "cookiegenero=Femenino;  max-age=300;  path=/;";
                  /*alert("Creación:");
                  alert(document.cookie);
  
                  // Modificar cookie usuario1*/
                  //document.cookie = "nombredelusuario=Mayes Pérez; expires=Thu, 31 Jul 2025 12:00:00 UTC; path=/;";
                  /*alert("Modificación:");
                  alert(getCookie("cookienombredelusuario"));
  
                  // Borrar cookie usuario2
                  alert("Borrar:");*/
                  //document.cookie = "cookiegenero=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
                  // Leer cookies individualmente
                  /*alert("(debe ser nombredleusuario): " + getCookie("nombredelusuario"));
                  alert("(debe estar numerodevisitas: vacia ): " + getCookie("numerodevisitas"));
                  alert("Todas las cookies actuales:"+document.cookie);  */
              }


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


