const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controllers'); // 👈 asegúrate de que la ruta sea correcta

// Ruta para login
router.post('/login', login);

module.exports = router;
