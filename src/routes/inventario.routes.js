const express = require('express');
const router = express.Router();

const inventarioController = require('../controllers/inventario.controllers');
const verifyToken = require('../auth.middleware');


//  Rutas protegidas
router.get('/', verifyToken, inventarioController.findAll);
router.get('/:IdInventario', verifyToken, inventarioController.findById);
router.post('/', verifyToken, inventarioController.create);
router.put('/:IdInventario', verifyToken, inventarioController.update);
router.delete('/:IdInventario', verifyToken, inventarioController.remove);

module.exports = router;
