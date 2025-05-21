
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

function registrarUsuario() {
    const correo = document.getElementById('correo').value;
    const constrasena = document.getElementById('contrasena').value;
    const archivoFoto = document.getElementById('foto').files[0];

    if (!correo  ) {
        alert('Debes escribir correo ');
        return;
    }
    if (!constrasena ) {
        alert('Debes escribir contrasena ');
        return;
    }
    if (!foto) {
        alert("Debes cargar una foto.");
        return;
    }

    const lector = new FileReader();
    lector.onload = function (e) {
        const nuevaFotoBase64 = e.target.result;
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const nuevoUsuario = {
            correo: correo,
            constrasena: constrasena,
            foto: nuevaFotoBase64,
            tipo: "cliente"
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('✅ Usuario registrado exitosamente');
        
        // Puedes redirigir después si quieres
        window.location.href = '2indexdellogin.html';
    };

lector.readAsDataURL(archivoFoto);
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
      
