const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controllers'); 

router.get('/', empleadosController.findAll);
router.get('/:IdEmpleados', empleadosController.findById);
router.post('/', empleadosController.create);
router.put('/:IdEmpleados', empleadosController.update);
router.delete('/:IdEmpleados', empleadosController.remove);

module.exports = router;