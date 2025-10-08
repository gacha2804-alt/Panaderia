const express = require('express');
const router = express.Router();
const tipoDocController = require('../controllers/tipodoc.controllers');
const verifyToken = require('../middleware/auth.middleware'); 

// Rutas públicas 
router.get('/', tipoDocController.findAll);             
router.get('/:IdTipoDoc', tipoDocController.findById);  

// Rutas privadas 
router.post('/', verifyToken, tipoDocController.create);           
router.put('/:IdTipoDoc', verifyToken, tipoDocController.update);  
router.delete('/:IdTipoDoc', verifyToken, tipoDocController.remove); 

module.exports = router;
