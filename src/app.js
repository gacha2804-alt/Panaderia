const express = require('express');
const userRoutes = require('./routes/users.routes');
const productosRoutes = require('./routes/productos.routes');
const tipodocRoutes = require('./routes/tipodoc.routes');
const proveedoresRoutes = require('./routes/proveedores.routes');
const personasRoutes = require('./routes/personas.routes');
const empleadosRoutes = require('./routes/empleados.routes');
const metodopagoRoutes = require('./routes/metodopago.routes'); // 🔧 minúscula consistente
const ventaEncabRoutes = require('./routes/ventaEncab.routes');
const inventarioRoutes = require('./routes/inventario.routes');
const ventaDetRoutes = require('./routes/ventaDet.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/tipodoc', tipodocRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/personas', personasRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/metodopago', metodopagoRoutes);
app.use('/api/ventaEncab', ventaEncabRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/ventaDet', ventaDetRoutes);
app.use('/api/auth', authRoutes);






app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
