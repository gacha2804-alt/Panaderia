const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const user = {
  email: "admin@gmail.com",
  password: "$2b$10$dRwcOZ.DzJtZOKr6tScp.eMQxwVIGMg/5oikBOQ28OvvV7mArW4Se" 
};

// Ruta de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email) {
    return res.status(400).json({ message: "Correo incorrecto" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Contraseña incorrecta" });
  }

  // Crear token
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });

  res.json({
    message: "Inicio de sesión exitoso",
    token
  });
});

module.exports = router;