// Trae el usuario desde localStorage
const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));

const correoUsuario = document.getElementById('correoUsuario');
const contrasena = document.getElementById('correoUsuario');


/*if (usuario) {
    // Mostrar el correo
    correoUsuario.textContent = usuario.correo;

} else {
    // Si no hay sesión, redirige al login
    window.location.href = '2paginalogin.html';
}*/

function toggleMenu() {
const menu = document.getElementById("menuDesplegable");
menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}