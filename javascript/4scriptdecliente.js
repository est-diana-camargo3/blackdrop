// Trae el usuario desde localStorage
const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));

const correoUsuario = document.getElementById('correoUsuario');
const contrasena = document.getElementById('correoUsuario');


/*if (usuario) {
    // Mostrar el correo
    correoUsuario.textContent = usuario.correo;

} else {
    // Si no hay sesión, redirige al login
    window.location.href = '2paginalogin.html';
}*/

function toggleMenu() {
const menu = document.getElementById("menuDesplegable");
menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}


// Navegación general al hacer clic en un producto
document.querySelectorAll('.productogeneral').forEach(producto => {
    producto.addEventListener('click', function (event) {
      // Si NO se hizo clic en el botón "Comprar", ir a la página de información del producto
      if (!event.target.closest('.btn-comprarproducto')) {
        const url = producto.dataset.link;
        window.location.href = url;
      }
    });
  });
  
  // Redirección directa al carrito si se hace clic en "Comprar"
  document.addEventListener("DOMContentLoaded", function() {
    const botonesComprar = document.querySelectorAll(".btn-comprarproducto");
  
    botonesComprar.forEach(function(boton) {
      boton.addEventListener("click", function(event) {
        event.stopPropagation(); // Previene que se dispare el evento del contenedor
        window.location.href = "../html/5carritodecompras.html";
      });
    });
  });
  