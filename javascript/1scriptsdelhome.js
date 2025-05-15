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

/*En JavaScript, una cookie se crea asignando un valor a document.cookie. Es algo así como decirle al navegador: ( chorme, 
  firefox...etc ) "Guarda esto".*/
/* Las cookies son datos almacenados en el navegador en pequeños archivos de texto, aunque el usuario cierre el navegador o se 
   desconecte del servidor, podemos guardar el nombre del visitante, el numero de veces que ha entrado 
   se guardan en forma de pares "nombre=valor"     
   si no le colocamos fecha de expiracion, esta desaparecera cuando el navegador se cierre */

/*      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        █                                 B A S E    D E   D A T O S   C O N   J S O N       (en prueba)                             █
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */
          
          let prueba=[
              {
                  "_comentario": "Este JSON contiene la base de  datos de todos los  clientes",
                  "correo":"cliente@correo.com",
                  "contraseña":1234,
                  "tipodeusuario":"cliente"
              },    
              {
                  "correo":"clientemujer@correo.com",
                  "contraseña":1234,
                  "tipodeusuario":"cliente"
              },
              {
                  "correo":"clientehombre@correo.com",
                  "contraseña":1234,
                  "tipodeusuario":"cliente"
              } 
          ]

          //console.log(prueba)
          //console.log(JSON.parse(prueba)[0])
          //console.log(JSON.parse(prueba)[0])



/*      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        █                                  C O O K I E S   I N I C I A L E S  (vacias)                                         █
        ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */
 
 
        // creacion de cookies 
            if  (confirm("Esta página utiliza cookies, si continúas navegando aceptas su uso")) 
                {
                    crearcookiesinicialesvacias();
                } 
            else 
                {
                    alert("No se han aceptado las cookies. Algunas funciones pueden no estar disponibles.");
                }

        // Obtener una cookie especifica 
            // Función para obtener una cookie por nombre, esta funcion se crea porque si simplemente 
            //enlazo la cookie a una variable...realmente eso no enlaza una cookies, sino  que crea un archivo de texto con todas las cookies actuales.
            // y no queremos eso, queremos realmente es poder seleccionar una sola cookie, por eso se crea esta funcion.
            function getCookie(nombre)  /*obtener el valor de una cookie específica por su nombre.*/
                {
                  let cookies = document.cookie.split("; "); /* devuelve todas las cookies en un solo string, ejm :"cookienombredelusuario=Diana Camargo;
                                                                cookienumerodevisitas=23; cookiegenero=femenino"*/
                                                              /* divide ese string en un array de cookies individuales: ejm ["cookienombredelusuario1=Diana Camargo", 
                                                                "cookienumerodevisitas=23", "cookiegenero=femenino" ]*/
                  for (let c of cookies)  /* se recorre cada cookie del array*/
                  {
                    let [clave, valor] = c.split("="); /*separa el nombre(clave), del valor de cada cookie. Por ejemplo: "cookienombredelusuario=Diana Camargo" 
                                                        se convierte en:
                                                        clave = "cookienombredelusuario"
                                                        valor = "Diana Camargo"   */

                    if (clave === nombre) return valor; /*si el nombre de la cookie (clave) coincide con el que estamos buscando (nombre), retorna el valor. y sale de la funcion*/
                  }
                  return null; /*Si recorre todas las cookies con el ciclo for y no encuentra ninguna que coincida en el ciclo retorna null*/
                }

        // Crear una cookie especifica 
            function crearcookiesinicialesvacias()
            {
                // Crear cookies
                //let fechadeexpiracion =Thu, 31 Jul 2025 12:00:00 UTC;

                document.cookie="cookiecorreodelusuario=vacioaunnosehalogueado;expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                document.cookie="cookiecontraseñadelusuario=vacioaunnosehalogueado;expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                document.cookie="cookietipodecuenta=vacioaunnosehalogueado;expires=Thu, 31 Jul 2025 12:00:00 UTC;path=/;";
                
                /*let nombre =prompt("holaa"); */
                /*alert("Creación:");
                alert(document.cookie);

                // Modificar cookie usuario1*/
                document.cookie = "nombredelusuario=Mayes Pérez; expires=Thu, 31 Jul 2025 12:00:00 UTC; path=/;";
                /*alert("Modificación:");
                alert(getCookie("cookienombredelusuario"));

                // Borrar cookie usuario2
                alert("Borrar:");*/
                document.cookie = "cookiegenero=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                // Leer cookies individualmente
                /*alert("(debe ser nombredleusuario): " + getCookie("nombredelusuario"));
                alert("(debe estar numerodevisitas: vacia ): " + getCookie("numerodevisitas"));
                alert("Todas las cookies actuales:"+document.cookie);  */
            }

            document.querySelectorAll('.productogeneral').forEach(producto => {
                producto.addEventListener('click', function (event) {
                  // Verifica si se hizo clic en el botón (o dentro de él)
                  if (!event.target.closest('.btn-comprarproducto')) {
                    const url = producto.dataset.link;
                    window.location.href = url;
                  }
                });
              });
              
            
      // Esta función se ejecuta cuando se carga la página
      document.addEventListener("DOMContentLoaded", function() {
        const botonesComprar = document.querySelectorAll(".btn-comprarproducto");
    
        botonesComprar.forEach(function(boton) {
            boton.addEventListener("click", function(event) {
                event.stopPropagation(); // ← Esto soluciona tu problema
                // Verifica si el usuario está logueado (aquí puedes poner tu propia lógica)
                const usuarioLogueado = false; // ← aquí va tu verificación real
    
                if (usuarioLogueado) {
                    // Si ya está logueado, lo envías al carrito
                    window.location.href = "../html/5carritodecompras.html";
                } else {
                    // Si no está logueado, lo envías al login con redirect al carrito
                    window.location.href = "2indexdellogin.html?redirect=carrito";
                }
            });
        });
    });
    // Suponiendo que tienes un array con datos de los productos
const productos = [
  {
    nombre: "Whey Pure 2lb",
    precio: "$160.000",
    imagen: "../imagenes/proteinas/proteinawheypure.jpg",
    descripcion: "Diseñada para aumento de masa muscular y una mejor recuperación",
    uso: "30g en 250ml de agua o leche, recomendado post-entreno",
    tamano: "2 libras",
    sabor: "Chocolate",
    nutricional: [
      "21g de proteína aislada",
      "Endulzado con Stevia",
      "Carbohidratos: >1g",
      "Grasas totales: 1.5g",
      "5.5g BCAA"
    ]
  },
  {
    nombre: "ISO 100",
    precio: "$350.000",
    imagen: "../imagenes/proteinas/proteinaiso100.jpg",
    descripcion: "Diseñada para aumento de masa muscular y una mejor recuperación",
    uso: "30g en 250ml de agua o leche, recomendado post-entreno",
    tamano: "4 libras",
    sabor: "Vainilla",
    nutricional: [
      "21g de proteína aislada",
      "Endulzado con Stevia",
      "Carbohidratos: >1g",
      "Grasas totales: 1.5g",
      "5.5g BCAA"
    ]
  },
  {
    nombre: "Bi Pro Lite 2lb",
    precio: "$170.000",
    imagen: "../imagenes/proteinas/proteinabiprolite.png",
    descripcion: "Diseñada para aumento de masa muscular y una mejor recuperación",
    uso: "30g en 250ml de agua o leche, recomendado post-entreno",
    tamano: "2 libras",
    sabor: "Vainilla",
    nutricional: [
      "21g de proteína aislada",
      "Endulzado con Stevia",
      "Carbohidratos: >1g",
      "Grasas totales: 1g",
      "4g BCAA"
    ]
  },
  {
    nombre: "Allen Whey 2.2lb",
    precio: "$180.000",
    imagen: "../imagenes/proteinas/proteinaallenwhey.jpg",
    descripcion: "Diseñada para aumento de masa muscular y una mejor recuperación",
    uso: "30g en 250ml de agua o leche, recomendado post-entreno",
    tamano: "2.2 libras",
    sabor: "Vainilla",
    nutricional: [
      "21g de proteína aislada",
      "Endulzado con Stevia",
      "Carbohidratos: >1g",
      "Grasas totales: 1g",
      "4g BCAA"
    ]
  },
  {
    nombre: "Allen Carnivor 2lb",
    precio: "$350.000",
    imagen: "../imagenes/proteinas/proteinacarnivor.jpg",
    descripcion: "Diseñada para aumento de masa muscular y una mejor recuperación",
    uso: "30g en 250ml de agua o leche, recomendado post-entreno",
    tamano: "4 libras",
    sabor: "Vainilla",
    nutricional: [
      "21g de proteína aislada",
      "Endulzado con Stevia",
      "Carbohidratos: >1g",
      "Grasas totales: 1g",
      "2g BCAA"
    ]
  },
  {
    nombre: "Vegan Pro 2lb",
    precio: "$190.000",
    imagen: "../imagenes/proteinas/proteinaveganpro.jpg",
    descripcion: "Diseñada para aumento de masa muscular y una mejor recuperación",
    uso: "30g en 250ml de agua o leche, recomendado post-entreno",
    tamano: "2 libras",
    sabor: "Vainilla",
    nutricional: [
      "22g de proteína aislada",
      "Endulzado con Stevia",
      "Carbohidratos: >1g",
      "Grasas totales: 1g",
      "4g BCAA"
    ]
  },
  
  // Agrega más objetos según tus productos
];

// Al hacer clic en un producto
document.querySelectorAll('.productogeneral').forEach((productoDiv, index) => {
  productoDiv.addEventListener('click', (event) => {
    if (!event.target.closest('.btn-comprarproducto')) {
      const producto = productos[index];
      localStorage.setItem("nombreProducto", producto.nombre);
      localStorage.setItem("precioProducto", producto.precio);
      localStorage.setItem("imagenProducto", producto.imagen);
      localStorage.setItem("descripcionProducto", producto.descripcion);
      localStorage.setItem("usoProducto", producto.uso);
      localStorage.setItem("tamanoProducto", producto.tamano);
      localStorage.setItem("saborProducto", producto.sabor);
      localStorage.setItem("nutricionProducto", JSON.stringify(producto.nutricional));
      window.location.href = productoDiv.dataset.link;
    }
  });
});
