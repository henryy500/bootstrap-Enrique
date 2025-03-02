// Obtener la lista de usuarios desde localStorage
let usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];

// Funcionalidad para editar usuarios
const editarLinks = document.querySelectorAll('.botonEditar');
editarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Obtener el índice del usuario desde el atributo 'data-index'
        const index = event.target.getAttribute('data-index');
        const usuario = usuariosList[index];

        // Mostrar el formulario de edición y cargar los datos del usuario
        document.getElementById('formulario-edicion').style.display = 'block';
        document.getElementById('edit-nombre').value = usuario.nombre;
        document.getElementById('edit-apellidos').value = usuario.apellidos;
        document.getElementById('edit-email').value = usuario.email;
        document.getElementById('edit-fecha-nacimiento').value = usuario.fechaNacimiento;
        document.getElementById('edit-pais').value = usuario.pais;
        document.getElementById('edit-ciudad').value = usuario.ciudad;

        // Actualizar el usuario cuando se haga clic en "Editar"
        document.getElementById('btnEditar').onclick = function() {
            // Obtener los valores del formulario de edición
            const nuevoNombre = document.getElementById('edit-nombre').value;
            const nuevoApellidos = document.getElementById('edit-apellidos').value;
            const nuevoEmail = document.getElementById('edit-email').value;
            const nuevaFechaNacimiento = document.getElementById('edit-fecha-nacimiento').value;
            const nuevoPais = document.getElementById('edit-pais').value;
            const nuevaCiudad = document.getElementById('edit-ciudad').value;

            // Verificar que los campos obligatorios no estén vacíos
            if (nuevoNombre === '' || nuevoEmail === '' || nuevaFechaNacimiento === '') {
                alert('Por favor, complete los campos obligatorios.');
                return;
            }

            // Actualizar la información del usuario
            usuario.nombre = nuevoNombre;
            usuario.apellidos = nuevoApellidos;
            usuario.email = nuevoEmail;
            usuario.fechaNacimiento = nuevaFechaNacimiento;
            usuario.pais = nuevoPais;
            usuario.ciudad = nuevaCiudad;

            // Actualizar la lista de usuarios en localStorage
            usuariosList[index] = usuario;
            localStorage.setItem('tablaUsuarios', JSON.stringify(usuariosList));

            // Actualizar la fila correspondiente en la tabla de usuarios
            const row = document.querySelectorAll('tr')[index + 1]; // +1 porque la tabla tiene un encabezado
            row.innerHTML = `
                <td>${usuario.nombre}</td>
                <td>${usuario.apellidos}</td>
                <td>${usuario.email}</td>
                <td>${usuario.fechaNacimiento}</td>
                <td>${usuario.pais}</td>
                <td>${usuario.ciudad}</td>
                <td>
                    <div class="acciones">
                        <a href="#" class="botonBorrar" data-index="${index}">Borrar</a>
                        <a href="#" class="botonEditar" data-index="${index}">Editar</a>
                        <a href="#" class="botonBloquear">Bloquear</a>
                        <a href="#" class="botonDesbloquear" style="display:none;">Desbloquear</a>
                        <a href="visualizarusuario${usuario.nombre}.html" class="botonVisualizar">Visualizar</a>
                    </div>
                </td>
            `;

            // Volver a esconder el formulario
            document.getElementById('formulario-edicion').style.display = 'none';
        };
    });
});

// Función para cargar el formulario de edición cuando se hace clic en "Editar"
function cargarFormularioEdicion(usuarioEmail) {
    const usuario = usuariosList.find(u => u.email === usuarioEmail);

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


