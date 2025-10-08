const express = require('express');
const router = express.Router();
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

module.exports = router;