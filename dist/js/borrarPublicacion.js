function borrarPublicacion(id) {
    // Buscamos la fila de la publicación usando el ID
    var fila = document.getElementById(id);

    // Si encontramos la fila, la eliminamos
    if (fila) {
        fila.remove();
    } else {
        console.log("No se encontró la publicación con ID: " + id);
    }
}
