function bloquearPublicacion(elemento) {
    
    var publicacion = elemento.closest('tr');
    
    
    publicacion.classList.add('bloqueada');

    
    var botonBloquear = publicacion.querySelector('.botonBloquear');
    var botonDesbloquear = publicacion.querySelector('.botonDesbloquear');
    
    botonBloquear.style.display = 'none';
    botonDesbloquear.style.display = 'inline';
}

function desbloquearPublicacion(elemento) {
    
    var publicacion = elemento.closest('tr');
    
    
    publicacion.classList.remove('bloqueada');
    
    
    var botonBloquear = publicacion.querySelector('.botonBloquear');
    var botonDesbloquear = publicacion.querySelector('.botonDesbloquear');
    
    botonBloquear.style.display = 'inline';
    botonDesbloquear.style.display = 'none';
}
