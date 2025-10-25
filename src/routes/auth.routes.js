const express = require('express');
const router = express.Router();

// ✅ mensaje para saber si se cargó
console.log('📁 Cargando rutas de autenticación...');

// ruta de prueba
router.get('/test', (req, res) => {
  res.send('✅ Ruta de prueba /api/auth/test funcionando');
});

// ruta de login
router.post('/login', (req, res) => {
  res.json({ message: '✅ Ruta POST /api/auth/login funcionando' });
});

module.exports = router;
