// Cargar usuarios desde localStorage
window.onload = function() {
    const usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];
    const usuariosBody = document.getElementById('usuarios-body');

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
                    <!-- El link de "Editar" pasa el email del usuario como parámetro en la URL -->
                    <a href="formulario2.html?email=${encodeURIComponent(usuario.email)}" class="botonEditar">Editar</a>
                    <a href="#" class="botonBorrar">Borrar</a>
                    <a href="#" class="botonBloquear">Bloquear</a>
                    <a href="#" class="botonDesbloquear" style="display:none;">Desbloquear</a>
                    <a href="visualizarusuario${usuario.nombre}.html" class="botonVisualizar">Visualizar</a>
                </div>
            </td>
        `;
        usuariosBody.appendChild(newRow);
    });
};