document.addEventListener("DOMContentLoaded", () => {
    // Recuperar productos del carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log("🔹 Carrito cargado desde localStorage:", carrito);

    const tablaBody = document.querySelector(".tabla-carrito tbody");
    const totalDiv = document.querySelector(".total");

    if (carrito.length === 0) {
        tablaBody.innerHTML = `<tr><td colspan="5">El carrito está vacío</td></tr>`;
        totalDiv.innerHTML = `<strong>Total</strong> &nbsp; $0`;
        return;
    }

    let total = 0;
    tablaBody.innerHTML = ""; // Limpiar la tabla antes de llenarla

    // Generar filas dinámicamente con los productos guardados
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

    // 🔹 **Ahora agregamos la fila del total general solo UNA vez, después del forEach**
    const filaTotal = document.createElement("tr");
    filaTotal.classList.add("fila-total");
    filaTotal.innerHTML = `
        <td colspan="3" style="text-align: right; font-weight: bold;">Total de la compra:</td>
        <td style="font-weight: bold;">$${total.toLocaleString("es-CO")}</td>
        <td></td>
    `;
    tablaBody.appendChild(filaTotal);

    totalDiv.innerHTML = `<strong>Total</strong> &nbsp; $${total.toLocaleString("es-CO")}`;

    // 🔥 **Eventos dentro de DOMContentLoaded**
    document.querySelectorAll(".btn-mas").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            carrito[index].cantidad++;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        });
    });

    document.querySelectorAll(".btn-menos").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad--;
                localStorage.setItem("carrito", JSON.stringify(carrito));
                location.reload();
            }
        });
    });

    document.querySelectorAll(".eliminar-producto").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        });
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