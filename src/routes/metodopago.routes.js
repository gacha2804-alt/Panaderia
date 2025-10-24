const express = require('express');
const router = express.Router();
const metodoPagoController = require('../controllers/metodopago.controllers');

router.get('/', metodoPagoController.findAll);
router.get('/:id', metodoPagoController.findById);
router.post('/', metodoPagoController.create);
router.put('/:id', metodoPagoController.update);
router.delete('/:id', metodoPagoController.remove);

module.exports = router;
