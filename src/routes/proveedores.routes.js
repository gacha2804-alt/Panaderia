const express = require('express');
const router = express.Router();

const proveedoresController = require('../controllers/proveedores.controllers');


router.get('/', proveedoresController.findAll);
router.get('/:Idproveedores', proveedoresController.findById);
router.post('/', proveedoresController.create);
router.put('/:Idproveedores', proveedoresController.update);
router.delete('/:Idproveedores', proveedoresController.remove);

module.exports = router;