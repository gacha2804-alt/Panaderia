const express = require('express');
const authRoutes = require('./routes/auth.routes'); // ✅ importa la ruta de autenticación

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ REGISTRO DE RUTA
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
