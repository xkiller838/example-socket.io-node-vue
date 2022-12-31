const http = require('./app');

const { HTTP_PORT = 3000 } = process.env;  // establecemos nuestro puerto

http.listen(HTTP_PORT)

//sevidor que esta escuchando
console.log('API escuchando en el puerto http://localhost:' + HTTP_PORT)