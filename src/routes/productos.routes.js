const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controllers');
const verifyToken = require('../auth.middleware');


router.get('/', productosController.findAll);
router.get('/:IdProducto', productosController.findById);
router.post('/', verifyToken, productosController.create);
router.put('/:IdProducto', verifyToken, productosController.update);
router.delete('/:IdProducto', verifyToken, productosController.remove);

module.exports = router;
