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

alert ("Esta página utiliza cookies, si continuas navegando aceptas su uso");

      // Función para obtener una cookie por nombre, esta funcion se crea porque si simplemente 
      //enlazo la cookie a una variable...realmente eso no enlaza unaa cookies, sino un archivo de texto con todas las cookies actuales.
      // por eso se crea esta funcion.
      function getCookie(nombre)  /*obtener el valor de una cookie específica por su nombre.*/
      {
        let cookies = document.cookie.split("; "); /* devuelve todas las cookies en un solo string, ejm :"usuario1=Diana Camargo; usuario2=Pedro Perez"*/
                                                    /* divide ese string en un array de cookies individuales: ejm ["usuario1=Diana Camargo", "usuario2=Pedro Perez"]*/
        for (let c of cookies)  /* se recorre cada cookie del array*/
        {
          let [clave, valor] = c.split("="); /*separa el nombre(clave), del valor de cada cookie. Por ejemplo: "usuario1=Maye" se convierte en:
                                               clave = "usuario1"
                                               valor = "Maye"   */

          if (clave === nombre) return valor; /*si el nombre de la cookie (clave) coincide con el que estamos buscando (nombre), retorna el valor. y sale de la funcion*/
        }
        return null; /*Si recorre todas las cookies con el ciclo for y no encuentra ninguna que coincida en el ciclo retorna null*/
      }

      // Crear cookies
      document.cookie = "nombredelusuario=Diana Camargo; expires=Thu, 31 Jul 2025 12:00:00 UTC; path=/;";
      document.cookie = "numerodevisitas=23; expires=Thu, 31 Jul 2025 12:00:00 UTC; path=/;";
      document.cookie = "genero=Femenino; expires=Thu, 31 Jul 2025 12:00:00 UTC; path=/;";
      alert("Creación:");
      alert(document.cookie);

      // Modificar cookie usuario1
      document.cookie = "nombredelusuario=Maye Pérez; expires=Thu, 31 Jul 2025 12:00:00 UTC; path=/;";
      alert("Modificación:");
      alert(document.cookie);

      // Borrar cookie usuario2
      alert("Borrar:");
      document.cookie = "numerodevisitas=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      // Leer cookies individualmente
      alert("(debe ser nombredleusuario): " + getCookie("nombredelusuario"));
      alert("(debe estar numerodevisitas: vacia ): " + getCookie("numerodevisitas"));
      alert("Todas las cookies actuales:"+document.cookie);
    
