module.exports = (http) => {
  //importamos la libreria de socket.io y le damos acceso a los cors
  const io = require('socket.io')(http, {
      cors: {
          origin: "*"
      }
  });

  io.on('connection', (socket) => {
      //muestra el id de la nueva conexion
      console.log('Nueva conexión con el Id:', socket.id);

      //muestra el id de la coneccion en consola de vs code
      socket.on('disconnect', () => {
          console.log('Conexión terminada:', socket.id);
        });

      // Escucha el evento 'message' del cliente y envía un mensaje de respuesta
      socket.on('message', message => {
          console.log(`Recibido mensaje: ${message}`);
          socket.emit('message', 'Hola cliente');
      });

  });

}