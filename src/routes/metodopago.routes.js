const express = require('express');
const router = express.Router();
const metodopagoController = require('../controllers/metodopago.controllers');

router.get('/', metodopagoController.findAll);
router.get('/:IdMetodoPago', metodopagoController.findById);
router.post('/', metodopagoController.create);
router.put('/:IdMetodoPago', metodopagoController.update);
router.delete('/:IdMetodoPago', metodopagoController.remove);

module.exports = router;
