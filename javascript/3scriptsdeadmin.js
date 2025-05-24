
//traer el correo guardado en el php 

    document.addEventListener("DOMContentLoaded", function () 
    {
      // Mostrar correo en el div .titulo
      const params = new URLSearchParams(window.location.search);
      const correo = params.get("correo");

      if (correo) {
        const titulo = document.querySelector(".titulo");
        if (titulo) {
          titulo.innerText = "Panel de administración, BIENVENIDO...   " + correo + "!";
        }
      } else {
        console.warn("No se encontró el correo en la URL");
      }  
    });
    

    
    // Traemos la "base de datos" de usuarios
    const usuarios = [
      { correo: "cliente@correo.com", contraseña: "1234", tipo: "cliente" },
      { correo: "admin@correo.com", contraseña: "1234", tipo: "administrador" },
      { correo: "mayerly@correo.com", contraseña: "1234", tipo: "administrador" },
      { correo: "juanita@correo.com", contraseña: "1234", tipo: "administrador" }
    ];

    // Filtramos solo los clientes
    const clientes = usuarios.filter(user => user.tipo === "cliente");

    // Seleccionamos la tabla de clientes
    const clientesTable = document.getElementById("clientes-table");

    // Recorremos los clientes y los agregamos a la tabla
    clientes.forEach(cliente => {
      const fila = `
        <tr>
          <td>${cliente.correo}</td>
          <td>${cliente.tipo}</td>
        </tr>
      `;
      clientesTable.innerHTML += fila;
    });
    // Mostrar el modal
function mostrarFormulario() {
  document.getElementById("modal").style.display = "block";

}

// Cerrar el modal
function cerrarFormulario() {
  document.getElementById("modal").style.display = "none";
}

// Agregar producto a la tabla
function agregarProducto() {
  const nombre = document.getElementById("nombreProducto").value;
  const precio = document.getElementById("precioProducto").value;
  const imagen = document.getElementById("imagenProducto").value;
  const descripcion = document.getElementById("descripcionProducto").value;
  const cantidad = document.getElementById("cantidadProducto").value;

  if (nombre && precio && imagen && descripcion && cantidad) {
    fetch("../php/7registrarproducto.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        precio,
        imagen,
        descripcion,
        cantidad,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || data.error);
        cerrarFormulario();
        cargarProductos(); // esta función la creamos en el siguiente paso
      })
      .catch((error) => {
        alert("Error al guardar producto.");
        console.error(error);
      });
  } else {
    alert("Completa todos los campos.");
  }
}


function cargarProductos() {
  fetch("../php/listar_productos.php")
    .then(res => res.json())
    .then(productos => {
      const tabla = document.getElementById("productos-table");
      tabla.innerHTML = `
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Descripción</th>
          <th>Cantidad</th>
        </tr>
      `;

      productos.forEach(prod => {
        const imagenHTML = prod.imagen
          ? `<img src="${prod.imagen}" alt="imagen" style="width:60px; height:60px; object-fit:cover; border-radius:5px;">`
          : "Sin imagen";

        tabla.innerHTML += `
          <tr>
            <td>${prod.nombre}</td>
            <td>$${parseInt(prod.precio).toLocaleString("es-CO")}</td>
            <td>${imagenHTML}</td>
            <td>${prod.descripcion}</td>
            <td>${prod.cantidad}</td>
          </tr>
        `;
      });
    })
    .catch(error => {
      console.error("Error al cargar productos:", error);
      const tabla = document.getElementById("productos-table");
      tabla.innerHTML += `<tr><td colspan="5" style="color:red;">Error al cargar productos</td></tr>`;
    });
}




document.addEventListener("DOMContentLoaded", cargarProductos);






let modoEdicion = false;

function editarParametros() {
  const btn = document.getElementById("btn-editar-parametros");
  const filas = document.querySelectorAll("table:nth-of-type(1) tr");

  if (!modoEdicion) {
    filas.forEach((fila, index) => {
      if (index === 0) return; // saltar encabezado

      // Editar cantidad (columna 3, índice 2)
      const celdaCantidad = fila.cells[2];
      const valorCantidad = celdaCantidad.textContent;
      celdaCantidad.innerHTML = `<input type="number" value="${valorCantidad}" min="0" style="width: 80px;">`;

      // Editar precio (columna 4, índice 3)
      const celdaPrecio = fila.cells[3];
      const valorPrecio = celdaPrecio.textContent.replace(/[^\d]/g, ""); // eliminar símbolos
      celdaPrecio.innerHTML = `<input type="number" value="${valorPrecio}" min="0" style="width: 100px;">`;
    });

    btn.textContent = "Guardar cambios";
    btn.classList.remove("btn-editar");
    btn.classList.add("btn-guardar");

    modoEdicion = true;
  } else {
    filas.forEach((fila, index) => {
      if (index === 0) return;

      // Guardar cantidad
      const celdaCantidad = fila.cells[2];
      const inputCantidad = celdaCantidad.querySelector("input");
      celdaCantidad.textContent = inputCantidad.value;

      // Guardar precio
      const celdaPrecio = fila.cells[3];
      const inputPrecio = celdaPrecio.querySelector("input");
      celdaPrecio.textContent = `$${parseInt(inputPrecio.value).toLocaleString("es-CO")}`;
    });

    btn.textContent = "Editar parámetros";
    btn.classList.remove("btn-guardar");
    btn.classList.add("btn-editar");

    modoEdicion = false;
  }

}