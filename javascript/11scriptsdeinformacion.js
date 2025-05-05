function agregarAlCarrito() {
    const cantidad = document.getElementById('cantidad').value;
    const tamaño = document.getElementById('tamaño').value;
    const sabor = document.getElementById('sabor').value;
  
    alert(`Producto añadido:\nCantidad: ${cantidad}\nTamaño: ${tamaño}\nSabor: ${sabor}`);
  }
  
  // Si quisieras pasar datos desde index.html puedes usar localStorage o parámetros de URL.
  document.addEventListener("DOMContentLoaded", () => {
    // Ejemplo para mostrar el nombre del producto
    const nombre = localStorage.getItem("nombreProducto") || "100% Whey Gold Standard";
    const precio = localStorage.getItem("precioProducto") || "$370.000";
    const imagen = localStorage.getItem("imagenProducto") || "img/whey.png";
  
    document.getElementById("nombreProducto").textContent = nombre;
    document.getElementById("precioProducto").textContent = precio;
    document.getElementById("imagenProducto").src = imagen;
  });
  