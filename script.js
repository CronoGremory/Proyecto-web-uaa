document.getElementById('formularioWeb').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Extracción de los 5 CAMPOS OBLIGATORIOS
    const campos = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('correo').value,
        id: document.getElementById('id').value,
        carrera: document.getElementById('carrera').value,
        comentario: document.getElementById('comentario').value
    };
    
    const btn = e.target.querySelector('button');
    
    // VALIDACIÓN 1: Nombre completo (Mínimo 10 caracteres)
    if (campos.nombre.length < 10) {
        alert("⚠️ Por favor, ingresa tu nombre completo.");
        return;
    }

    // VALIDACIÓN 2: Correo institucional UAA
    if (!campos.email.endsWith('@alumno.uaa.mx')) {
        alert("⚠️ Error: Solo se permiten correos @alumno.uaa.mx.");
        return;
    }
    
    // VALIDACIÓN 3: Matrícula (Mínimo 5 dígitos)
    if (campos.id.length < 5) {
        alert("⚠️ La matrícula ingresada es inválida.");
        return;
    }

    // VALIDACIÓN 4: Carrera (No vacía)
    if (campos.carrera.trim() === "") {
        alert("⚠️ El campo de carrera es obligatorio.");
        return;
    }

    // VALIDACIÓN 5: Comentario Técnico (Mínimo 5 caracteres)
    if (campos.comentario.length < 5) {
        alert("⚠️ El comentario técnico es demasiado corto.");
        return;
    }
    
    // Feedback final de éxito
    btn.innerHTML = "PROYECTO VALIDADO CON ÉXITO ✅";
    btn.classList.replace('btn-lg', 'btn-success');
    btn.disabled = true;
    
    setTimeout(() => {
        alert("¡Felicidades Luis Pablo Mendoza Saucedo! Los 5 campos han sido validados correctamente.");
    }, 400);
});