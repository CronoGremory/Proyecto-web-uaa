document.getElementById('formularioWeb').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura de los 5 CAMPOS OBLIGATORIOS
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('correo').value;
    const matricula = document.getElementById('id').value;
    const carrera = document.getElementById('carrera').value;
    const comentario = document.getElementById('comentario').value;
    
    const btn = e.target.querySelector('button');
    
    // VALIDACIONES
    if (nombre.length < 10) {
        alert("⚠️ Por favor, ingresa tu nombre completo.");
        return;
    }

    if (!email.endsWith('@alumno.uaa.mx')) {
        alert("⚠️ Solo se permiten correos institucionales (@alumno.uaa.mx).");
        return;
    }
    
    if (matricula.length < 5) {
        alert("⚠️ La matrícula ingresada no es válida.");
        return;
    }

    if (carrera.trim().length === 0) {
        alert("⚠️ Debes especificar tu carrera.");
        return;
    }

    if (comentario.trim().length < 5) {
        alert("⚠️ El comentario técnico es obligatorio para la validación.");
        return;
    }
    
    // Respuesta visual de éxito
    btn.innerHTML = "PROYECTO VALIDADO CON ÉXITO ✅";
    btn.style.backgroundColor = "#198754";
    btn.disabled = true;
    
    setTimeout(() => {
        alert("¡Felicidades Luis Pablo Mendoza Saucedo! Los 5 campos han sido validados para tu entrega de hoy.");
    }, 400);
});