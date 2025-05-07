function volverAtras() {
    if (document.referrer !== "") {
      window.history.back();
    } else {
      // Si no hay historial, lo redirigimos a una página por defecto (opcional)
      window.location.href = "../html/1indexdelhome.html";
    }
  }
  