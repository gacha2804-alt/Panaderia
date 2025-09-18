const express = require('express');
const router = express.Router();
const tipodocControllers= require('../controllers/tipodoc.controllers');

router.get('/', tipodocControllers.findAll);
router.get('/:IdTipoDoc', tipodocControllers.findById);
router.post('/', tipodocControllers.create);
router.put('/:IdTipoDoc', tipodocControllers.update);
router.delete('/:IdTipoDoc', tipodocControllers.remove);

module.exports = router;
