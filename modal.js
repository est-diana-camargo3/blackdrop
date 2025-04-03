// Obtener elementos
const modal = document.getElementById("modal");
const iconoLogin = document.getElementById("iconoLogin");
const btnCerrar = document.querySelector(".cerrar");

modal.style.display = "none";

// Evento para abrir el modal
iconoLogin.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Evento para cerrar el modal
btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const botonAtras = document.querySelector(".contenedoriconoatras"); 

    if (botonAtras) {
        botonAtras.addEventListener("click", function() {
            window.location.href = "index.html"; // Redirige a index
        });
    }
});
