import { createApp } from 'vue'
import App from './App.vue'
import io from 'socket.io-client';
import './assets/main.css'

// Crea una instancia de Socket.IO
const socket = io('http://localhost:3000/');

// Escucha el evento 'message' del servidor y muestra el mensaje en la consola
socket.on('message', message => {
  console.log(message);
});

const app = createApp(App)
app.mount('#app')

// Agrega la instancia de Socket.IO a la aplicación Vue como una propiedad global
app.config.globalProperties.socket = socket;
