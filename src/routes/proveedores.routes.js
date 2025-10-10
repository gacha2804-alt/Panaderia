const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedores.controllers');

router.get('/', proveedoresController.findAll);
router.get('/:id', proveedoresController.findById);
router.post('/', proveedoresController.create);
router.put('/:id', proveedoresController.update);
router.delete('/:id', proveedoresController.remove);

module.exports = router;
