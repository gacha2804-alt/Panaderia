const express = require('express');
const router = express.Router();
const ventaEncabController = require('../controllers/ventaEncab.controllers');
<<<<<<< HEAD
const verifyToken = require('../middleware/auth.middleware');
=======
>>>>>>> emelin

// Rutas públicas
router.get('/', ventaEncabController.findAll);
router.get('/:IdVenta', ventaEncabController.findById);

<<<<<<< HEAD
// Rutas privadas
router.post('/', verifyToken, ventaEncabController.create);
router.put('/:IdVenta', verifyToken, ventaEncabController.update);
router.delete('/:IdVenta', verifyToken, ventaEncabController.remove);

=======
>>>>>>> emelin
module.exports = router;
