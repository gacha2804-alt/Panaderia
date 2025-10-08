const express = require('express');
const router = express.Router();
const ventaDetController = require('../controllers/ventaDet.controllers'); 
const { verifyToken } = require('../middlewares/authMiddleware');

// Rutas públicas
router.get('/', ventaDetController.findAll);
router.get('/:IdVentaD', ventaDetController.findById);

// Rutas privadas
router.post('/', verifyToken, ventaDetController.create);
router.put('/:IdVentaD', verifyToken, ventaDetController.update);
router.delete('/:IdVentaD', verifyToken, ventaDetController.remove);

module.exports = router;
