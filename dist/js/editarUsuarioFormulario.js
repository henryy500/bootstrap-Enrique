document.getElementById('btnEditar').addEventListener('click', function(event) {
    event.preventDefault();

    // Capturar los valores del formulario de edición
    const nombre = document.getElementById('edit-nombre').value;
    const apellidos = document.getElementById('edit-apellidos').value;
    const email = document.getElementById('edit-email').value;
    const fechaNacimiento = document.getElementById('edit-fecha-nacimiento').value;
    const pais = document.getElementById('edit-pais').value;
    const ciudad = document.getElementById('edit-ciudad').value;
    const contrasena = document.getElementById('contraseña').value;
    const repetirContrasena = document.getElementById('repetir-contraseña').value;

    // Verificar que los campos obligatorios no estén vacíos
    if (nombre === '' || email === '' || fechaNacimiento === '') {
        alert('Por favor, complete los campos obligatorios.');
        return;
    }

    // Verificar que las contraseñas coincidan
    if (contrasena !== repetirContrasena) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Obtener la lista de usuarios desde el localStorage
    const usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];

    // Encontrar el usuario que estamos editando (usando email como identificador)
    const index = usuariosList.findIndex(user => user.email === email);

    if (index !== -1) {
        // Actualizar el usuario en el arreglo
        usuariosList[index] = {
            nombre,
            apellidos,
            email,
            fechaNacimiento,
            pais,
            ciudad,
            contrasena // Actualizar la contraseña
        };

        // Guardar la lista de usuarios actualizada en localStorage
        localStorage.setItem('tablaUsuarios', JSON.stringify(usuariosList));

        // Redirigir a la página de usuarios (o actualizar la tabla en la misma página)
        window.location.href = 'tables.html';  // O podrías hacer una actualización de la tabla en la misma página
    } else {
        alert('Usuario no encontrado.');
    }
});

// Mostrar el formulario de edición y cargar los datos del usuario seleccionado
function cargarFormularioEdicion(usuarioEmail) {
    const usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];
    const usuario = usuariosList.find(user => user.email === usuarioEmail);

    if (usuario) {
        document.getElementById('edit-nombre').value = usuario.nombre;
        document.getElementById('edit-apellidos').value = usuario.apellidos;
        document.getElementById('edit-email').value = usuario.email;
        document.getElementById('edit-fecha-nacimiento').value = usuario.fechaNacimiento;
        document.getElementById('edit-pais').value = usuario.pais;
        document.getElementById('edit-ciudad').value = usuario.ciudad;

        // Mostrar el formulario de edición
        document.getElementById('formulario-edicion').style.display = 'block';
    }
}

// Llamar a la función cargarFormularioEdicion cuando se hace clic en "Editar"
document.querySelectorAll('.botonEditar').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const usuarioEmail = event.target.closest('tr').querySelector('td:nth-child(3)').textContent;
        cargarFormularioEdicion(usuarioEmail);
    });
});
