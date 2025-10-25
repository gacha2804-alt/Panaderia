const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas.controllers');
const verifyToken = require('../auth.middleware');


//  Rutas públicas
router.get('/', personasController.findAll);
router.get('/:IdPersona', personasController.findById);

//  Rutas privadas
router.post('/', verifyToken, personasController.create);
router.put('/:IdPersona', verifyToken, personasController.update);
router.delete('/:IdPersona', verifyToken, personasController.remove);

module.exports = router;
