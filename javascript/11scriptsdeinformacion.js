function cambiarCantidad(delta) {
  const input = document.getElementById('cantidad');
  let cantidad = parseInt(input.value);
  if (cantidad + delta >= 1) {
    input.value = cantidad + delta;
  }
}

function agregarAlCarrito() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado")); // Verificar usuario
    const nombreProducto = localStorage.getItem("nombreProducto");
    const precioProducto = parseInt(localStorage.getItem("precioProducto").replace(/\D/g, ""));
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (!nombreProducto || !precioProducto) {
        alert("❌ No hay un producto seleccionado.");
        return;
    }

    // **Si el usuario NO está logueado, primero redirigir al login**
    if (!usuario) {
        alert("🔒 Debes iniciar sesión para agregar productos al carrito.");
        localStorage.setItem("productoPendiente", JSON.stringify({ nombre: nombreProducto, precio: precioProducto, cantidad: cantidad }));
        window.location.href = "../html/2indexdellogin.html";
        return;
    }

    // Si el usuario ya está logueado, agregar directamente al carrito
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find(p => p.nombre === nombreProducto);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre: nombreProducto, precio: precioProducto, cantidad: cantidad });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`✅ ${nombreProducto} agregado: ${cantidad} unidad(es)`);
    window.location.href = "../html/5carritodecompras.html"; // Ir al carrito
}
  
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nombreProducto").textContent = localStorage.getItem("nombreProducto");
  document.getElementById("precioProducto").textContent = localStorage.getItem("precioProducto");
  document.getElementById("imagenProducto").src = localStorage.getItem("imagenProducto");
  document.getElementById("descripcionProducto").textContent = localStorage.getItem("descripcionProducto");
  document.getElementById("usoProducto").textContent = "Uso recomendado: " + localStorage.getItem("usoProducto");
  document.getElementById("tamanoProducto").textContent = "Tamaño: " + localStorage.getItem("tamanoProducto");
  document.getElementById("saborProducto").textContent = "Sabor: " + localStorage.getItem("saborProducto");

  const nutricion = JSON.parse(localStorage.getItem("nutricionProducto") || "[]");
  if (nutricion.length >= 5) {
    document.getElementById("nutricion1").textContent = nutricion[0];
    document.getElementById("nutricion2").textContent = nutricion[1];
    document.getElementById("nutricion3").textContent = nutricion[2];
    document.getElementById("nutricion4").textContent = nutricion[3];
    document.getElementById("nutricion5").textContent = nutricion[4];
  }
});


  function volverAtras() {
    if (document.referrer !== "") {
      window.history.back();
    } else {
      // Si no hay historial, lo redirigimos a una página por defecto (opcional)
      window.location.href = "../html/1indexdelhome.html";
    }
  }
  