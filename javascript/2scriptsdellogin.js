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


   /*   ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        █                     V a l i d a r    q u e   e l   F o r m u l a r i o   e s t e   l l e n o                         █
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
                    // verifico que haya una opcion presionada o checkeada, 
                    //  Si un radio está seleccionado, espresionado contendrá el elemento <input> seleccionado; 
                    //  si no, hay nada presionado sera igual a null
                    let espresionado = document.querySelector('input[name="tipodecuentaenhtml"]:checked'); 
                    // miro cual es la opcion presionada, por medio de la operacion ternaria
                    // si es presionado tiene algun elemento seleccionado devuleve el valor de ese elemento
                    // si es presionado no tiene ningun elemento seleccionado devuelve null
                    let tipodecuentaenjava = espresionado ? espresionado.value : null;
                    //let tipoCuenta = tipoSeleccionado.id === "cliente" ? "cliente" : "administrador";

                    // Validación de campos
                    while (!inputcorreoenjava || !inputcontrasenaenjava || !espresionado)  //  ) 
                        {
                            alert("Por favor completa todos los campos.");
                            return;
                        }
                        
                        modificarcookiesinicialescondatosrealesdelusuario(inputcorreoenjava, inputcontrasenaenjava,tipodecuentaenjava);  
                        Nosequesera(inputcorreoenjava, inputcontrasenaenjava, tipodecuentaenjava);  
                    
                }


   /*   ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        █                                   C o o k i e s   R E A L E S   (con datos del usuario)                              █
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */



       /*   ╔══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•═╗
            ║                                          M o d i f i c a r     c o o k i e                                     ║                                                                        
            ╚══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•═╝ */

                // Mofificar las cookies originales, agregandoles los valores que me dio el usuario  
                function modificarcookiesinicialescondatosrealesdelusuario(inputcorreoenjava, inputcontrasenaenjava,tipodecuentaenjava)
                        {
                            //console.log("Prueba Valor de inputcorreoenjava", inputcorreoenjava); 
                            //Modifico la cookie, dandole el valor que tengo en correoInput 
                            //la razon por la que usamos encode es porque eso codifica lo que tiene la variable...osea me lee @, +, =
                            document.cookie="cookiecorreodelusuario="+encodeURIComponent(inputcorreoenjava)+";expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                            //console.log("Prueba Todas las cookies actuales:", document.cookie);
                            document.cookie = "cookiecontrasenadelusuario="+ encodeURIComponent(inputcontrasenaenjava) + "; expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                            //console.log("cookiecontrasnadelusuario: ", document.cookie);
                            document.cookie="cookietipodecuenta="+encodeURIComponent(tipodecuentaenjava)+";expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                            alert("Estas son las cookies que guarde: "
                                +"\n\n 📝 Cookiecorreodelsuario=    "+obteneroleercookie("cookiecorreodelusuario")
                                +"\n 📝 Cookiecontrasenasuario=  "+obteneroleercookie("cookiecontrasenadelusuario")
                                +"\n 📝 Cookietipodecuenta=  "+obteneroleercookie("cookietipodecuenta"));               
                        }

                    
       /*   ╔══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•═╗
            ║                                                L e e r     c o o k i e                                         ║                                                                        
            ╚══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•══•═╝ */

                // funcion para obtener o extraer info de una cookie especifica 
                function obteneroleercookie(nombreoclavedelacookiequebusco)
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
                        function volverAtras() {
                            if (document.referrer !== "") {
                              window.history.back();
                            } else {
                              // Si no hay historial, lo redirigimos a una página por defecto (opcional)
                              window.location.href = "../html/1indexdelhome.html";
                            }
                          }
                          






   
        //    aqui de para abajo no he revisado____________________________________________
        //    _____________________________________________________________________________
        //    _____________________________________________________________________________
        //    _____________________________________________________________________________
        //    _____________________________________________________________________________
        //    _____________________________________________________________________________
        //    _____________________________________________________________________________







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





  function Nosequesera(correoInput, contraseñaInput, tipoCuenta)
{
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
                window.location.href = '5carritodecompras.html';
            } else {
                window.location.href = '4paginacliente.html';
            }
        } else if (tipoCuenta === "administrador") {
            window.location.href = '3paginaadministrador.html';
        }
    } else {
        alert("❌ Correo, contraseña o tipo de cuenta incorrectos.\n\n✅ Ejemplo válido:\nCorreo: clientemujer@correo.com\nContraseña: 1234\nTipo: cliente\n\n✅ Otro válido:\nCorreo: clientehombre@correo.com\nContraseña: 1234\nTipo:cliente\n\n✅ Otro válido:\nCorreo: admin@correo.com\nContraseña: 1234\nTipo: administrador");
    }
}



                    




 /*   ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      █                                              B o t ó n   a t r á s                                                   █
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */

      // 📌 Evento para el botón "Atrás"
      let botonAtras = document.querySelector(".contenedoriconoatras");
      if (botonAtras) {
      botonAtras.addEventListener("click", function () {
      window.location.href = "1indexdelhome.html"; // Redirige a la página principal
      });
      }


