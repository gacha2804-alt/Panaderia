// src/controllers/auth.controllers.js
const login = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "12345") {
    res.status(200).json({ message: "Inicio de sesión exitoso ✅" });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas ❌" });
  }
};

module.exports = { login };
