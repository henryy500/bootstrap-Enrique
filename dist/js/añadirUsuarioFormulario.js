document.getElementById('btnAniadir').addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón (enviar el formulario)

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('email').value.trim();
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();
    const repetirContraseña = document.getElementById('repetir-contraseña').value.trim();

    // Validaciones
    if (!nombre || !email || !fechaNacimiento || !contraseña || !repetirContraseña) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    if (contraseña !== repetirContraseña) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Crear el nuevo HTML para la fila de la tabla
    const nuevaFila = `
        <tr>
            <td>${nombre}</td>
            <td>${apellidos}</td>
            <td>${email}</td>
            <td>${fechaNacimiento}</td>
            <td>${pais}</td>
            <td>${ciudad}</td>
            <td>
                <div class="acciones">
                    <a href="#" class="botonBorrar" onclick="borrarUsuario(this)"><i class="bi bi-trash"></i></a>
                    <a href="#" class="botonBloquear"><i class="bi bi-lock"></i></a>
                    <a href="#" class="botonDesbloquear" style="display:none;"><i class="bi bi-lock-open"></i></a>
                    <a href="visualizarusuario${nombre}.html" class="botonVisualizar"><i class="bi bi-eye"></i></a>
                </div>
            </td>
        </tr>
    `;

    // Comprobar si la ventana que contiene la tabla está abierta
    if (window.opener && !window.opener.closed) {
        // Insertar la nueva fila en la tabla de usuarios en la página principal
        window.opener.document.getElementById('usuarios-body').insertAdjacentHTML('beforeend', nuevaFila);
    }

    // Limpiar el formulario después de añadir el usuario
    document.querySelector('form').reset();

    // Mostrar una alerta de éxito y redirigir
    alert('Usuario añadido con éxito');
    window.location.href = 'index.html'; // Volver a la página de usuarios
});
