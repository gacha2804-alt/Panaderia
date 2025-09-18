const express = require('express');
const router = express.Router();

// Importa el controlador (asegúrate que exista en /src/controllers/inventario.controllers.js)
const inventarioController = require('../controllers/inventario.controllers');

// Rutas CRUD
router.get('/', inventarioController.findAll);
router.get('/:IdInventario', inventarioController.findById);
router.post('/', inventarioController.create);
router.put('/:IdInventario', inventarioController.update);
router.delete('/:IdInventario', inventarioController.remove);

module.exports = router;