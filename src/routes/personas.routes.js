const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas.controller');
const verifyToken = require('../middleware/auth.middleware');

<<<<<<< HEAD
// Rutas públicas
router.get('/public-profile/:id', personasController.getPublicProfile);
=======
router.get('/', personasController.findAll);
router.get('/:id', personasController.findById);
router.post('/', personasController.create);
router.put('/:id', personasController.update);
router.delete('/:id', personasController.remove);
>>>>>>> emelin

// Rutas privadas (protegidas)
router.get('/profile', verifyToken, personasController.getProfile);
router.put('/update', verifyToken, personasController.update);
router.delete('/delete', verifyToken, personasController.delete);
router.get('/dashboard', verifyToken, personasController.getDashboard);
router.post('/change-password', verifyToken, personasController.changePassword);

module.exports = router;