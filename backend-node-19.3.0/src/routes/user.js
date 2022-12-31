import express from 'express';
//accedemos a las rutas de express
const router = express.Router();
//importamos el controlador  de user
const userController = require('../controllers/user');

//ruta de inicio de la aplicacion con el array de usuario
router.get("/", userController.index)

//rua para crear usuario en el controlador create
router.post("/api/user/create", userController.create)

module.exports = router