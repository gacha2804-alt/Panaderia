//const express = require('express');
//const router = express.Router();
//const empleadosController = require('../controllers/empleados.controllers'); 

//router.get('/', empleadosController.findAll);
//router.get('/:IdEmpleado', empleadosController.findById);
//router.post('/', empleadosController.create);
//router.put('/:IdEmpleado', empleadosController.update);
//router.delete('/:IdEmpleado', empleadosController.remove);

//module.exports = router;


// src/routes/empleados.routes.js
const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controllers');
const verifyToken = require('../middleware/auth.middleware');

// ✅ Rutas públicas
router.get('/', empleadosController.findAll);
router.get('/:IdEmpleado', empleadosController.findById);

// ✅ Rutas privadas (protegidas)
router.post('/', verifyToken, empleadosController.create);
router.put('/:IdEmpleado', verifyToken, empleadosController.update);
router.delete('/:IdEmpleado', verifyToken, empleadosController.remove);

module.exports = router;

