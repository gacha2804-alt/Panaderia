//const express = require('express');
//const router = express.Router();
//const empleadosController = require('../controllers/empleados.controllers'); 

//router.get('/', empleadosController.findAll);
//router.get('/:IdEmpleado', empleadosController.findById);
//router.post('/', empleadosController.create);
//router.put('/:IdEmpleado', empleadosController.update);
//router.delete('/:IdEmpleado', empleadosController.remove);

//module.exports = router;



const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controller');
const verifyToken = require('../middleware/auth.middleware');

// Rutas públicas
router.get('/public-profile/:id', empleadosController.getPublicProfile);

// Rutas privadas (protegidas)
router.get('/profile', verifyToken, empleadosController.getProfile);
router.put('/update', verifyToken, empleadosController.update);
router.delete('/delete', verifyToken, empleadosController.delete);
router.get('/dashboard', verifyToken, empleadosController.getDashboard);
router.post('/change-password', verifyToken, empleadosController.changePassword);

module.exports = router;


