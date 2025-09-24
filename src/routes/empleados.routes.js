const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controllers'); 

router.get('/', empleadosController.findAll);
router.get('/:IdEmpleado', empleadosController.findById);
router.post('/', empleadosController.create);
router.put('/:IdEmpleado', empleadosController.update);
router.delete('/:IdEmpleado', empleadosController.remove);

module.exports = router;