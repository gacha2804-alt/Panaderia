const express = require('express');
const router = express.Router();
const ventaDetController = require('../controllers/ventaDet.controllers'); 

router.get('/', ventaDetController.findAll);
router.get('/:IdVentaD', ventaDetController.findById);
router.post('/', ventaDetController.create);
router.put('/:IdVentaD', ventaDetController.update);
router.delete('/:IdVentaD', ventaDetController.remove);

module.exports = router;