  // Selecciona los elementos necesarios
  const btnMas = document.querySelector('.btn-mas');
  const btnMenos = document.querySelector('.btn-menos');
  const cantidadSpan = document.querySelector('.valor-cantidad');
  const subtotalTd = document.querySelectorAll('td')[3]; // Subtotal
  const totalDiv = document.querySelector('.total');      // Total

  const precioUnitario = 160000; // Precio en pesos sin formato

  function actualizarSubtotal(cantidad) {
    const subtotal = precioUnitario * cantidad;
    subtotalTd.textContent = `$${subtotal.toLocaleString("es-CO")}`;
    totalDiv.innerHTML = `<strong>Total</strong> &nbsp; $${subtotal.toLocaleString("es-CO")}`;
  }

  btnMas.addEventListener('click', () => {
    let cantidad = parseInt(cantidadSpan.textContent);
    cantidad++;
    cantidadSpan.textContent = cantidad;
    actualizarSubtotal(cantidad);
  });

  btnMenos.addEventListener('click', () => {
    let cantidad = parseInt(cantidadSpan.textContent);
    if (cantidad > 1) {
      cantidad--;
      cantidadSpan.textContent = cantidad;
      actualizarSubtotal(cantidad);
    }
  });