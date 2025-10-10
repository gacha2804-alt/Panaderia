const express = require('express');
const router = express.Router();
const tipodocController = require('../controllers/tipodoc.controllers');

router.get('/', tipodocController.findAll);
router.get('/:id', tipodocController.findById);
router.post('/', tipodocController.create);
router.put('/:id', tipodocController.update);
router.delete('/:id', tipodocController.remove);

module.exports = router;
