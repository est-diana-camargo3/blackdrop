function cambiarCantidad(delta) {
  const input = document.getElementById('cantidad');
  let cantidad = parseInt(input.value);
  if (cantidad + delta >= 1) {
    input.value = cantidad + delta;
  }
}

function agregarAlCarrito() {
  const cantidad = document.getElementById('cantidad').value;
  // Puedes guardar esto en localStorage o pasar como parámetro más adelante
  alert(`Producto agregado: ${cantidad} unidad(es)`);
  window.location.href = '../html/5carritodecompras.html';
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
  