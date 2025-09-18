
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controllers');

router.get('/', productosController.findAll);
router.get('/:IdProducto', productosController.findById);
router.post('/', productosController.create);
router.put('/:IdProducto', productosController.update);
router.delete('/:IdProducto', productosController.remove);

module.exports = router;