const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

<<<<<<< HEAD
// Asegúrate que productosController.login y productosController.register son funciones
router.post('/login', productosController.login);
router.post('/register', productosController.register);
=======
router.get('/', productosController.findAll);
router.get('/:id', productosController.findById);
router.post('/', productosController.create);
router.put('/:id', productosController.update);
router.delete('/:id', productosController.remove);
>>>>>>> emelin

module.exports = router;
