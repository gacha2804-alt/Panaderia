const express = require('express');
const router = express.Router();
<<<<<<< HEAD
constproveedoresController = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth.middleware');

// Rutas públicas
router.get('/public-profile/:id',proveedoresController.getPublicProfile);

// Rutas privadas (protegidas)
router.get('/profile', verifyToken,proveedoresController.getProfile);
router.put('/update', verifyToken,proveedoresController.update);
router.delete('/delete', verifyToken,proveedoresController.delete);
router.get('/dashboard', verifyToken,proveedoresController.getDashboard);
router.post('/change-password', verifyToken,proveedoresController.changePassword);
=======
const proveedoresController = require('../controllers/proveedores.controllers');

router.get('/', proveedoresController.findAll);
router.get('/:id', proveedoresController.findById);
router.post('/', proveedoresController.create);
router.put('/:id', proveedoresController.update);
router.delete('/:id', proveedoresController.remove);
>>>>>>> emelin

module.exports = router;
