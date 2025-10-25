const express = require('express');
const router = express.Router();
const tipoDocController = require('../controllers/tipodoc.controllers');
const verifyToken = require('../auth.middleware');



router.get('/public/tipodoc', tipoDocController.getAll);
router.get('/public/tipodoc/:IdTipoDoc', tipoDocController.getById);


router.post('/private/tipodoc', verifyToken, tipoDocController.create);
router.put('/private/tipodoc/:IdTipoDoc', verifyToken, tipoDocController.update);
router.delete('/private/tipodoc/:IdTipoDoc', verifyToken, tipoDocController.delete);

module.exports = router;
