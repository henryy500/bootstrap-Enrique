$(".botonBorrar").click(function() {
    var bool = confirm("¿Seguro de eliminar el dato?");
    if (bool) {
        
        var row = $(this).closest("tr"); 
        row.remove(); 
        
        alert("Se eliminó correctamente.");
    } else {
        alert("Canceló la solicitud.");
    }
});
