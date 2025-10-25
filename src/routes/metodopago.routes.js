const express = require('express');
const router = express.Router();
const metodopagoController = require('../controllers/metodopago.controllers');
const verifyToken = require('../auth.middleware');



router.get('/', metodopagoController.findAll);
router.get('/:IdMetodoPago', metodopagoController.findById);


router.post('/', verifyToken, metodopagoController.create);
router.put('/:IdMetodoPago', verifyToken, metodopagoController.update);
router.delete('/:IdMetodoPago', verifyToken, metodopagoController.remove);

module.exports = router;
