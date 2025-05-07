// 📌 Evento para el botón "Atrás"
let botonAtras = document.querySelector(".contenedoriconoatras");
if (botonAtras) {
    botonAtras.addEventListener("click", function () {
        window.location.href = "2indexdellogin.html"; // Redirige a la página principal
    });
}
function volverAtras() {
    if (document.referrer !== "") {
      window.history.back();
    } else {
      // Si no hay historial, lo redirigimos a una página por defecto (opcional)
      window.location.href = "../html/1indexdelhome.html";
    }
  }
  