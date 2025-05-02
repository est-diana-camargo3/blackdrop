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
            let inputcontrasenaenjava = document.querySelector("#inputcontrasenaenhtml").value.trim();
            //let tipoSeleccionado = document.querySelector('input[name="tipo_cuenta"]:checked');
            //let tipoCuenta = tipoSeleccionado.id === "cliente" ? "cliente" : "administrador";

            // Validación de campos
            while (!inputcorreoenjava || !inputcontrasenaenjava )  //  || !tipoSeleccionado) 
                {
                    alert("Por favor completa todos los campos.");
                    return;
                }
                  
                modificarcookiesinicialescondatosrealesdelusuario(inputcorreoenjava, inputcontrasenaenjava);  
               
        }


  /*  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      █   M o d i f i c a r   C o o k i e s   i n i c i a l e s    c o n   d a t o s   R E A L E S   d e l   u s u a r i o   █
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */


            // Crear una cookie especifica 
            function modificarcookiesinicialescondatosrealesdelusuario(inputcorreoenjava, inputcontrasenaenjava)
                    {
                        //console.log("Prueba Valor de inputcorreoenjava", inputcorreoenjava); 
                        //Modifico la cookie, dandole el valor que tengo en correoInput 
                        //la razon por la que usamos encode es porque eso codifica lo que tiene la variable...osea me lee @, +, =
                        document.cookie="cookiecorreodelusuario="+encodeURIComponent(inputcorreoenjava)+";expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                        //console.log("Prueba Todas las cookies actuales:", document.cookie);
                        document.cookie = "cookiecontrasenadelusuario="+ encodeURIComponent(inputcontrasenaenjava) + "; expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                        //console.log("cookiecontrasnadelusuario: ", document.cookie);
                        alert(" 📝 Cookiecorreodelsuario=    "+getcookie("cookiecorreodelusuario")
                           +"\n 📝 Cookiecontrasenasuario=  "+getcookie("cookiecontrasenadelusuario"));               
                    }

            // funcion para obtener o extraer info de una cookie especifica 
            function getcookie(nombreoclavedelacookiequebusco)
                    {
                        let todaslascookies=document.cookie.split(";") // devuelve todas las cookies en un string, con split, 
                                                                    // cogemos todo el string y lo transformamos en un array en el 
                                                                    // que cada cookie ubica una posicion
                        //leemos Cada elemento Contenido dentro del arreglo cookies, osea recorremos todo el arreglo
                        for(let c of todaslascookies)
                        {
                            let [clave, valor] = c.trim().split("="); //separa el nombre de la cookie del valor de la misma. ejm nombre=diana, lo 
                                                                      // divide en clave=nombre; valor=diana y c.trim quita los espacios en blanco
                            if(clave===nombreoclavedelacookiequebusco) {  return decodeURIComponent(valor)}; // decodificamos por si hay caracteres especiales; }
                        }
                        return null ; // su recorre todas las cookies ydel ciclo y no la encuetra, devuelve null
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


