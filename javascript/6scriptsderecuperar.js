// 📌 Evento para el botón "Atrás"
let botonAtras = document.querySelector(".contenedoriconoatras");
if (botonAtras) {
    botonAtras.addEventListener("click", function () {
        window.location.href = "2indexdellogin.html"; // Redirige a la página principal
    });
}
