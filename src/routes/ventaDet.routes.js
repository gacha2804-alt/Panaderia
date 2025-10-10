const express = require('express');
const router = express.Router();
const ventaDetController = require('../controllers/ventaDet.controllers');

router.get('/', ventaDetController.findAll);
router.get('/:id', ventaDetController.findById);
router.post('/', ventaDetController.create);
router.put('/:id', ventaDetController.update);
router.delete('/:id', ventaDetController.remove);

module.exports = router;
