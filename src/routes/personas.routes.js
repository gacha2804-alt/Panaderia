const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas.controllers');

router.get('/', personasController.findAll);
router.get('/:id', personasController.findById);
router.post('/', personasController.create);
router.put('/:id', personasController.update);
router.delete('/:id', personasController.remove);

module.exports = router;
