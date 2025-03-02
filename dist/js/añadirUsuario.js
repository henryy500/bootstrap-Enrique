window.onload = function() {
    // Obtener los usuarios del localStorage
    const usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];

    // Acceder al cuerpo de la tabla
    const usuariosBody = document.getElementById('usuarios-body');

    // Insertar las filas de usuarios
    usuariosList.forEach(function(usuario) {
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
                    <a href="#" class="botonBorrar">Borrar</a>
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
        
        // Obtener el índice del usuario a borrar desde el atributo data-index
        const index = event.target.getAttribute('data-index');
        
        // Eliminar el usuario del array
        const usuariosList = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosList.splice(index, 1); // Eliminar el usuario por índice
        
        // Guardar los usuarios actualizados en el localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuariosList));

        // Eliminar la fila de la tabla
        event.target.closest('tr').remove();
    });
});
}