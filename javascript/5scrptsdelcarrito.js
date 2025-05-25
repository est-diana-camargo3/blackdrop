function confirmarCompra() {
    console.log("🧪 Función confirmarCompra() ejecutada");
  const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  carrito.forEach(producto => {
     console.log(`⏳ Enviando producto: ${producto.nombre} (x${producto.cantidad})`);
    fetch("https://blackdrop.onrender.com/php/descontar_inventario.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `nombre=${encodeURIComponent(producto.nombre)}&cantidad=${encodeURIComponent(producto.cantidad)}`
    })
    .then(response => response.json())
    .then(data => {
      console.log(`✔️ ${producto.nombre}:`, data);
    })
    .catch(error => {
      console.error("❌ Error al descontar producto:", error);
    });
  });

  alert("✅ Compra confirmada. Gracias por tu pedido.");
  sessionStorage.removeItem("carrito");
  window.location.href = "../html/1indexdelhome.html";
}


document.addEventListener("DOMContentLoaded", () => {
  const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
  console.log("🔹 Carrito cargado desde sessionStorage:", carrito);

  const tablaBody = document.querySelector(".tabla-carrito tbody");
  const totalDiv = document.querySelector(".total");

  if (carrito.length === 0) {
    tablaBody.innerHTML = `<tr><td colspan="5">El carrito está vacío</td></tr>`;
    totalDiv.innerHTML = `<strong>Total</strong> &nbsp; $0`;
    return;
  }

  let total = 0;
  tablaBody.innerHTML = "";

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td class="cantidad">
        <button class="btn-menos" data-index="${index}">−</button>
        <span class="valor-cantidad">${producto.cantidad}</span>
        <button class="btn-mas" data-index="${index}">+</button>
      </td>
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toLocaleString("es-CO")}</td>
      <td>$${subtotal.toLocaleString("es-CO")}</td>
      <td><button class="eliminar-producto" data-index="${index}">❌</button></td>
    `;
    tablaBody.appendChild(fila);
  });

  const filaTotal = document.createElement("tr");
  filaTotal.classList.add("fila-total");
  filaTotal.innerHTML = `
    <td colspan="3" style="text-align: right; font-weight: bold;">Total de la compra:</td>
    <td style="font-weight: bold;">$${total.toLocaleString("es-CO")}</td>
    <td></td>
  `;
  tablaBody.appendChild(filaTotal);

  totalDiv.innerHTML = `<strong>Total</strong> &nbsp; $${total.toLocaleString("es-CO")}`;

  // Delegación de eventos para +, − y eliminar
  document.querySelector(".tabla-carrito").addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    if (index === undefined) return;

    if (event.target.classList.contains("btn-mas")) {
      carrito[index].cantidad++;
    } else if (event.target.classList.contains("btn-menos")) {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
      }
    } else if (event.target.classList.contains("eliminar-producto")) {
      carrito.splice(index, 1);
    } else {
      return;
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
  });
});


// 🔹 **Función para volver atrás**
function volverAtras() {
    if (document.referrer !== "") {
        window.history.back();
    } else {
        window.location.href = "../html/1indexdelhome.html";
    }
}