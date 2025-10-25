const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedores.controllers');
const verifyToken = require('../auth.middleware');


// 🔓 Rutas públicas
router.get('/public/proveedores', proveedoresController.findAll);
router.get('/public/proveedores/:IdProveedor', proveedoresController.findById);

// 🔒 Rutas privadas
router.post('/private/proveedores', verifyToken, proveedoresController.create);
router.put('/private/proveedores/:IdProveedor', verifyToken, proveedoresController.update);
router.delete('/private/proveedores/:IdProveedor', verifyToken, proveedoresController.remove);

module.exports = router;
