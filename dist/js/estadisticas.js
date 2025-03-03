// Simulación de datos
document.addEventListener('DOMContentLoaded', () => {
    const connectedUsers = 5; // Ejemplo de usuarios conectados
    const createdPosts = 100; // Ejemplo de publicaciones creadas
    const blockedPosts = 3; // Ejemplo de publicaciones bloqueadas
    const pendingUsers = 2; // Ejemplo de usuarios pendientes de validar
  
    // Actualizar el HTML con los datos
    document.getElementById('usuarios-conectados').textContent = connectedUsers;
    document.getElementById('publicaciones-creadas').textContent = createdPosts;
    document.getElementById('publicaciones-bloqueadas').textContent = blockedPosts;
    document.getElementById('pendientes-validar').textContent = pendingUsers;
  });
  