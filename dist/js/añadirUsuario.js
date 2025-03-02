window.onload = function() {
    // Obtener los usuarios del localStorage
    const usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];

    // Acceder al cuerpo de la tabla
    const usuariosBody = document.getElementById('usuarios-body');

    // Insertar las filas de usuarios
    usuariosList.forEach(function(usuario, index) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.email}</td>
            <td>${usuario.fechaNacimiento}</td>
            <td>${usuario.pais}</td>
            <td>${usuario.ciudad}</td>
            <td>
                <div class="acciones">
                    <a href="#" class="botonBorrar" data-index="${index}">Borrar</a>
                    <a href="#" class="botonBloquear">Bloquear</a>
                    <a href="#" class="botonDesbloquear" style="display:none;">Desbloquear</a>
                    <a href="visualizarusuario${usuario.nombre}.html" class="botonVisualizar">Visualizar</a>
                </div>
            </td>
        `;
        usuariosBody.appendChild(newRow);
    });

    // Añadir funcionalidad para borrar usuarios
    const borrarLinks = document.querySelectorAll('.botonBorrar');
    borrarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Preguntar al usuario si está seguro de querer borrar
            const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este usuario?");
            
            if (confirmDelete) {
                // Obtener el índice del usuario a borrar desde el atributo data-index
                const index = event.target.getAttribute('data-index');
                
                // Obtener la lista de usuarios del localStorage
                let usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];
                
                // Eliminar el usuario del array
                usuariosList.splice(index, 1); // Eliminar el usuario por índice
                
                // Guardar los usuarios actualizados en el localStorage
                localStorage.setItem('tablaUsuarios', JSON.stringify(usuariosList));

                // Eliminar la fila de la tabla
                event.target.closest('tr').remove();
            } else {
                // Si el usuario cancela, no hacer nada
                console.log("Eliminación cancelada");
            }
        });
    });
}
