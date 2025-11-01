require('dotenv').config();
const express = require('express');

const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const personasRoutes = require('./routes/personas.routes');
const productosRoutes = require('./routes/productos.routes');
const proveedoresRoutes = require('./routes/proveedores.routes');
const empleadosRoutes = require('./routes/empleados.routes');
const inventarioRoutes = require('./routes/inventario.routes');
const metodopagoRoutes = require('./routes/metodopago.routes');

const app = express();


const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const BASE_URL = `http://localhost:${PORT}`;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    return res.status(200).json({});
  }
  next();
});


app.get('/', (req, res) => {
  res.send('API funcionando correctamente ');
});


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/personas', personasRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/metodopago', metodopagoRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: `No se puede encontrar ${req.originalUrl} en este servidor!`
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Error interno del servidor'
  });
});

app.listen(PORT, () => {
  console.log('=================================');
  console.log(`Servidor corriendo en ${BASE_URL}`);
  console.log(`Entorno: ${ENV}`);
  console.log('=================================');
});

module.exports = app;
