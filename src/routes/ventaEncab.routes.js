const express = require('express');
const router = express.Router();
const ventaEncabController = require('../controllers/ventaEncab.controllers');
const verifyToken = require('../auth.middleware');


router.get('/', ventaEncabController.findAll);
router.get('/:IdVenta', ventaEncabController.findById);


router.post('/', verifyToken, ventaEncabController.create);
router.put('/:IdVenta', verifyToken, ventaEncabController.update);
router.delete('/:IdVenta', verifyToken, ventaEncabController.remove);

module.exports = router;
