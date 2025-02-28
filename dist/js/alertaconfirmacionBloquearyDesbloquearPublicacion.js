$(document).ready(function() {
    // Código para bloquear y desbloquear publicaciones
    $(document).on('click', '.botonBloquear', function() {
        var bool = confirm("¿Seguro de bloquear esta publicación?");
        if (bool) {
            var row = $(this).closest("tr");
            var bloquearButton = $(this);

            bloquearButton.text("Desbloquear");
            bloquearButton.removeClass("botonBloquear").addClass("botonDesbloquear");

            row.find(".botonDesbloquear").show();
            bloquearButton.hide();

            alert("Publicación bloqueada correctamente.");
        } else {
            alert("Canceló la solicitud.");
        }
    });

    $(document).on('click', '.botonDesbloquear', function() {
        var bool = confirm("¿Seguro de desbloquear esta publicación?");
        if (bool) {
            var row = $(this).closest("tr");
            var desbloquearButton = $(this);

            desbloquearButton.text("Bloquear");
            desbloquearButton.removeClass("botonDesbloquear").addClass("botonBloquear");

            row.find(".botonBloquear").show();
            desbloquearButton.hide();

            alert("Publicación desbloqueada correctamente.");
        } else {
            alert("Canceló la solicitud.");
        }
    });
});
