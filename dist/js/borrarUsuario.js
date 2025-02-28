function borrarUsuario(usuarioId) {
    console.log("ID recibido para borrar: " + usuarioId); 
    
    
    var fila = document.getElementById(usuarioId);
  
    
    if (fila) {
     
      fila.remove();
      console.log("La fila con ID " + usuarioId + " fue eliminada.");
    } else {
      console.log("No se encontró la fila con ID: " + usuarioId);
    }
  }
  