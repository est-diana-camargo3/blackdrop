
function mostrarMiniatura(event) {
    const miniatura = document.getElementById('miniatura');
    const archivo = event.target.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function(e) {
            miniatura.innerHTML = `<img src="${e.target.result}" alt="Foto" style="width:100px;height:100px;border-radius:50%; margin-left:40px;">`;
        }
        lector.readAsDataURL(archivo);
    } else {
        miniatura.innerHTML = '';
    }
}



 
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
      
