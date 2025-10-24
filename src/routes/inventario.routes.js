
const express = require('express');
const router = express.Router();


const inventarioController = require('../controllers/inventario.controllers');


router.get('/', inventarioController.findAll);
router.get('/:IdInventario', inventarioController.findById);
router.post('/', inventarioController.create);
router.put('/:IdInventario', inventarioController.update);
router.delete('/:IdInventario', inventarioController.remove);

module.exports = router;