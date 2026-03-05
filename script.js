document.getElementById('formularioWeb').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Extracción de los 5 CAMPOS
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('correo').value;
    const matricula = document.getElementById('id').value;
    const carrera = document.getElementById('carrera').value;
    const comentario = document.getElementById('comentario').value;
    
    const btn = e.target.querySelector('button');
    
    // VALIDACIÓN 1: Nombre (mínimo 10 caracteres)
    if (nombre.length < 10) {
        alert("⚠️ Por favor, ingresa tu nombre completo.");
        return;
    }

    // VALIDACIÓN 2: Correo institucional
    if (!email.endsWith('@alumno.uaa.mx')) {
        alert("⚠️ Error: Solo se permite el correo institucional (@alumno.uaa.mx)");
        return;
    }
    
    // VALIDACIÓN 3: Matrícula (mínimo 5 dígitos)
    if (matricula.length < 5) {
        alert("⚠️ La matrícula ingresada es demasiado corta.");
        return;
    }

    // VALIDACIÓN 4: Carrera (no vacía)
    if (carrera.trim() === "") {
        alert("⚠️ Especifica tu carrera.");
        return;
    }

    // VALIDACIÓN 5: Comentario técnico (mínimo 5 caracteres)
    if (comentario.length < 5) {
        alert("⚠️ El comentario técnico es obligatorio.");
        return;
    }
    
    // Éxito
    btn.innerHTML = "PROYECTO VALIDADO ✅";
    btn.style.backgroundColor = "#198754";
    btn.disabled = true;
    
    setTimeout(() => {
        alert("¡Éxito Luis Pablo Mendoza Saucedo! Los 5 campos han sido validados para tu entrega.");
    }, 300);
});