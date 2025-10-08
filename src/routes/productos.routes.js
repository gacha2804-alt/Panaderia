const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

// Asegúrate que productosController.login y productosController.register son funciones
router.post('/login', productosController.login);
router.post('/register', productosController.register);

module.exports = router;