$(document).on('click', '.botonBloquear', function() {
    var bool = confirm("¿Seguro de bloquear al usuario?");
    if (bool) {
        // Obtener la fila (tr) y el botón de "Bloquear"
        var row = $(this).closest("tr");
        var bloquearButton = $(this); 
        
        
        bloquearButton.text("Desbloquear");
        bloquearButton.removeClass("botonBloquear").addClass("botonDesbloquear");
        
        
        alert("Usuario bloqueado correctamente.");
    } else {
        
        alert("Canceló la solicitud.");
    }
});

// Función para desbloquear un usuario
$(document).on('click', '.botonDesbloquear', function() {
    var bool = confirm("¿Seguro de desbloquear al usuario?");
    if (bool) {
        
        var row = $(this).closest("tr");
        var desbloquearButton = $(this); 
        
        
        desbloquearButton.text("Bloquear");
        desbloquearButton.removeClass("botonDesbloquear").addClass("botonBloquear");
        
        
        alert("Usuario desbloqueado correctamente.");
    } else {
        
        alert("Canceló la solicitud.");
    }
});
