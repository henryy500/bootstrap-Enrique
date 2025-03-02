 // Al cargar la página de edición
 window.onload = function() {
    // Obtener el parámetro de correo electrónico de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email'); // Obtener el correo electrónico del usuario

    // Obtener la lista de usuarios desde localStorage
    const usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];

    // Buscar el usuario que corresponde al correo electrónico
    const usuario = usuariosList.find(u => u.email === email);

    if (usuario) {
        // Llenar el formulario con los datos del usuario
        document.getElementById('edit-nombre').value = usuario.nombre;
        document.getElementById('edit-apellidos').value = usuario.apellidos;
        document.getElementById('edit-email').value = usuario.email;
        document.getElementById('edit-fecha-nacimiento').value = usuario.fechaNacimiento;
        document.getElementById('edit-pais').value = usuario.pais;
        document.getElementById('edit-ciudad').value = usuario.ciudad;

        // Al hacer clic en "Editar", guardar los cambios
        document.getElementById('btnEditar').onclick = function() {
            // Actualizar los datos del usuario
            usuario.nombre = document.getElementById('edit-nombre').value;
            usuario.apellidos = document.getElementById('edit-apellidos').value;
            usuario.email = document.getElementById('edit-email').value;
            usuario.fechaNacimiento = document.getElementById('edit-fecha-nacimiento').value;
            usuario.pais = document.getElementById('edit-pais').value;
            usuario.ciudad = document.getElementById('edit-ciudad').value;

            // Guardar los cambios en localStorage
            const updatedUsuariosList = usuariosList.map(u => u.email === email ? usuario : u);
            localStorage.setItem('tablaUsuarios', JSON.stringify(updatedUsuariosList));

            // Redirigir de vuelta al listado de usuarios
            alert('Usuario actualizado correctamente');
            window.location.href = 'index.html'; // Redirigir a la página de listado
        };
    } else {
        alert("Usuario no encontrado.");
    }
};