const express = require('express');
const cors = require('cors');
const userRouter = require('../routes/user');

const app = express();

//middleware
app.use(cors({ origin: '*'}));
app.use(express.json())
app.use(express.urlencoded({ extended: true})); 

//archivos de rutas de usuarios
app.use(userRouter);

//generacion del servidor  HTTP
const http = require('http').createServer(app);

//importacion de la configuracion de web sckets
const socket = require('./socket');

socket(http);

module.exports = http;