// Función para bloquear al usuario
function bloquearUsuario(boton) {
  
  boton.style.display = "none"; 
  
  
  let botonDesbloquear = boton.nextElementSibling; 
  botonDesbloquear.style.display = "inline"; 
}


function desbloquearUsuario(boton) {
  
  boton.style.display = "none"; 
  
  
  let botonBloquear = boton.previousElementSibling; 
  botonBloquear.style.display = "inline"; 
}
