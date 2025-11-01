const express = require('express');
const router = express.Router();
const ventaEncabController = require('../controllers/ventaEncab.controllers');

const verifyToken = require('../middleware/auth.middleware');


// Rutas públicas
router.get('/', ventaEncabController.findAll);
router.get('/:IdVenta', ventaEncabController.findById);


// Rutas privadas
router.post('/', verifyToken, ventaEncabController.create);
router.put('/:IdVenta', verifyToken, ventaEncabController.update);
router.delete('/:IdVenta', verifyToken, ventaEncabController.remove);


module.exports = router;
