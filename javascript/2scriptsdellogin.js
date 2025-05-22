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
                    let espresionado = document.querySelector('input[name="tipodeusuario"]:checked'); 
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
                        validarInicioSesion(inputcorreoenjava, inputcontrasenaenjava, tipodecuentaenjava);
                    
                }
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
                          






function validarInicioSesion(correo, contrasena, tipodecuenta) {
    console.log("Enviando datos al servidor:", correo, contrasena, tipodecuenta);
    
    fetch('../php/2verificarusuario.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `correo=${encodeURIComponent(correo)}&contrasena=${encodeURIComponent(contrasena)}&tipodecuenta=${encodeURIComponent(tipodecuenta)}`
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
        console.log("Valor de data.redireccion:", data.redireccion);

        if (data.exito) {
            alert(`✅ Login correcto \n\n ✅ Bienvenido: ${data.correo}`);
            
            // Guardar usuario en localStorage
            localStorage.setItem("usuarioLogueado", JSON.stringify({ correo: data.correo }));

            // Verificar si hay un producto pendiente
            const productoPendiente = JSON.parse(localStorage.getItem("productoPendiente"));

            if (productoPendiente) {
                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                const productoExistente = carrito.find(p => p.nombre === productoPendiente.nombre);

                if (productoExistente) {
                    productoExistente.cantidad += productoPendiente.cantidad;
                } else {
                    carrito.push(productoPendiente);
                }

                localStorage.setItem("carrito", JSON.stringify(carrito));
                localStorage.removeItem("productoPendiente"); // Limpiar el producto pendiente
                
                console.log("🔹 Producto pendiente agregado al carrito:", productoPendiente);
                window.location.href = "../html/5carritodecompras.html"; // Ir al carrito después del login
            } else {
                window.location.href = data.redireccion; // Si no había producto pendiente, ir a la página normal
            }
        } else {
            alert("❌ Correo, contraseña o tipo de cuenta incorrectos.");
        }
    })
    .catch(error => console.error("Error en la autenticación:", error));
}



function iniciarSesion() {
    const correo = document.getElementById("inputcorreoenhtml").value;
    const contrasena = document.getElementById("inputcontrasenaenhtml").value;
    const tipodeusuario = document.querySelector('input[name="tipodeusuario"]:checked').id;

    fetch("../php/verificarusuario.php", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `correo=${encodeURIComponent(correo)}&contrasena=${encodeURIComponent(contrasena)}&tipodeusuario=${encodeURIComponent(tipodeusuario)}`
    })
    .then(response => response.json())
    .then(data => {
        console.log("📌 Respuesta completa del servidor:", data);
        if (data.exito) {
            alert(`✅ Login correcto \n\n ✅ Bienvenido: ${data.correo}`);
            
            // 🔥 **Guardar usuario en `localStorage` directamente**
            console.log("Correo recibido del servidor:", data.correo);
            
            localStorage.setItem("usuarioLogueado", JSON.stringify({ correo: data.correo }));

            // 🔹 **Si había un producto pendiente, agregarlo al carrito**
            const productoPendiente = JSON.parse(localStorage.getItem("productoPendiente"));

            if (productoPendiente) {
                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                const productoExistente = carrito.find(p => p.nombre === productoPendiente.nombre);

                if (productoExistente) {
                    productoExistente.cantidad += productoPendiente.cantidad;
                } else {
                    carrito.push(productoPendiente);
                }

                localStorage.setItem("carrito", JSON.stringify(carrito));
                localStorage.removeItem("productoPendiente"); // Limpiar el producto pendiente
                
                console.log("🔹 Producto pendiente agregado al carrito:", productoPendiente);
                window.location.href = "../html/5carritodecompras.html"; // Ir al carrito después del login
            } else {
                window.location.href = data.redireccion; // Si no había producto pendiente, ir a la página normal
            }

        } else {
            alert("❌ Correo, contraseña o tipo de cuenta incorrectos.");
            alert(data.mensaje);
        }
    })
    .catch(error => {
        alert("❌ Error al conectar con el servidor.");
        console.error(error);
    });
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


