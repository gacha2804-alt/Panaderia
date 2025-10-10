const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controllers');

router.get('/', inventarioController.findAll);
router.get('/:id', inventarioController.findById);
router.post('/', inventarioController.create);
router.put('/:id', inventarioController.update);
router.delete('/:id', inventarioController.remove);

module.exports = router;






