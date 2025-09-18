const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas.controllers');

router.get('/', personasController.findAll);
router.get('/:IdPersona', personasController.findById);
router.post('/', personasController.create);
router.put('/:IdPersona', personasController.update);
router.delete('/:IdPersona', personasController.remove);

module.exports = router;
