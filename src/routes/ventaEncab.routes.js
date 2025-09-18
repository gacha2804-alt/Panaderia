const express = require('express');
const router = express.Router();
const ventaEncabController = require('../controllers/ventaEncab.controllers'); 

router.get('/', ventaEncabController.findAll);
router.get('/:IdVenta', ventaEncabController.findById);
router.post('/', ventaEncabController.create);
router.put('/:IdVenta', ventaEncabController.update);
router.delete('/:IdVenta', ventaEncabController.remove);

module.exports = router;