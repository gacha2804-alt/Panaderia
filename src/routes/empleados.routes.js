const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controllers');
const verifyToken = require('../auth.middleware');




router.get('/', empleadosController.findAll); // Ver todos los empleados
router.get('/:IdEmpleado', empleadosController.findById); // Ver un empleado por ID


router.post('/', verifyToken, empleadosController.create); // Crear empleado
router.put('/:IdEmpleado', verifyToken, empleadosController.update); // Actualizar empleado
router.delete('/:IdEmpleado', verifyToken, empleadosController.remove); // Eliminar empleado

module.exports = router;
