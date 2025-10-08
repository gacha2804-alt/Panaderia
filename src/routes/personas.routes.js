const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas.controller');
const verifyToken = require('../middleware/auth.middleware');

// Rutas públicas
router.get('/public-profile/:id', personasController.getPublicProfile);

// Rutas privadas (protegidas)
router.get('/profile', verifyToken, personasController.getProfile);
router.put('/update', verifyToken, personasController.update);
router.delete('/delete', verifyToken, personasController.delete);
router.get('/dashboard', verifyToken, personasController.getDashboard);
router.post('/change-password', verifyToken, personasController.changePassword);

module.exports = router;