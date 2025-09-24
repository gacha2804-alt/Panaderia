const express = require('express');
const router = express.Router();

const proveedoresController = require('../controllers/proveedores.controllers');


router.get('/', proveedoresController.findAll);
router.get('/:Idproveedor', proveedoresController.findById);
router.post('/', proveedoresController.create);
router.put('/:Idproveedor', proveedoresController.update);
router.delete('/:Idproveedor', proveedoresController.remove);

module.exports = router;