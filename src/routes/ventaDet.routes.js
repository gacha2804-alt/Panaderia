const express = require('express');
const router = express.Router();
const ventaDetController = require('../controllers/ventaDet.controllers'); 

router.get('/', ventaDetController.findAll);
router.get('/:IdVenta', ventaDetController.findById);
router.post('/', ventaDetController.create);
router.put('/:IdVenta', ventaDetController.update);
router.delete('/:IdVenta', ventaDetController.remove);

module.exports = router;