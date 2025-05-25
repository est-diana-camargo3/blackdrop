//traer el correo guardado en el php 


document.addEventListener("DOMContentLoaded", function () {
  // Mostrar correo en el div .titulo
  const params = new URLSearchParams(window.location.search);
  const correo = params.get("correo");

  if (correo) {
    const titulo = document.querySelector(".titulo");
    if (titulo) {
      titulo.innerText = "¡Bienvenido " + correo + "!";
    }
  } else {
    console.warn("No se encontró el correo en la URL");
  }

  // Activar comportamiento del botón comprar
  const botonesComprar = document.querySelectorAll(".btn-comprarproducto");
  botonesComprar.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
      event.stopPropagation();

      // Extraer el nombre y contenedor del producto
      const contenedor = boton.closest('.productogeneral');
      const nombreProducto = contenedor.dataset.nombre;

      console.log("🧪 Producto seleccionado:", nombreProducto);

      // Obtener precio desde el DOM
      const precioTexto = contenedor.querySelector('.precioproducto').innerText;
      const precioLimpio = parseFloat(precioTexto.replace(/[$\s.]/g, "").replace(",", "."));

      const productoCarrito = {
        nombre: nombreProducto,
        precio: precioLimpio,
        cantidad: 1
      };

      // Obtener carrito actual desde sessionStorage
      const carritoActual = JSON.parse(sessionStorage.getItem("carrito")) || [];

      // Verificar si ya está en el carrito
      const existente = carritoActual.find(p => p.nombre === productoCarrito.nombre);
      if (existente) {
        existente.cantidad += 1;
      } else {
        carritoActual.push(productoCarrito);
      }

      // Guardar carrito actualizado
      sessionStorage.setItem("carrito", JSON.stringify(carritoActual));

      // Redirigir al carrito
      window.location.href = "../html/5carritodecompras.html";
    });
  });
});



// Trae el usuario desde localStorage
const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));

const correoUsuario = document.getElementById('correoUsuario');
const contrasena = document.getElementById('correoUsuario');


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

  