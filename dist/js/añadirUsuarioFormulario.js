document.getElementById('btnAñadir').addEventListener('click', function(event) {
    event.preventDefault();

    // Capturar los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;

    // Verificar que los campos obligatorios no estén vacíos
    if (nombre === '' || email === '' || fechaNacimiento === '') {
        alert('Por favor, complete los campos obligatorios.');
        return;
    }

    // Crear una nueva fila para el usuario
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${email}</td>
        <td>${fechaNacimiento}</td>
        <td>${pais}</td>
        <td>${ciudad}</td>
        <td>
            <div class="acciones">
                <a href="#" class="botonBorrar">Borrar</a>
                <a href="#" class="botonBloquear">Bloquear</a>
                <a href="#" class="botonDesbloquear" style="display:none;">Desbloquear</a>
                <a href="visualizarusuario${nombre}.html" class="botonVisualizar">Visualizar</a>
            </div>
        </td>
    `;

    // Añadir la nueva fila al listado de usuarios en la otra página
    // Aquí agregamos la fila en el localStorage (si es necesario) o bien puedes hacer que se agregue dinámicamente en usuarios.html

    const usuariosList = JSON.parse(localStorage.getItem('tablaUsuarios')) || [];
    usuariosList.push({
        nombre,
        apellidos,
        email,
        fechaNacimiento,
        pais,
        ciudad
    });

    // Guardar los usuarios en el localStorage
    localStorage.setItem('tablaUsuarios', JSON.stringify(usuariosList));

    // Redirigir al listado de usuarios o mostrar el nuevo usuario en la misma página
    window.location.href = 'tables.html';
});