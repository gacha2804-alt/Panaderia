require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user.routes');
const empleadosRoutes = require('./routes/empleados.routes');
const inventarioRoutes = require('./routes/inventario.routes');
const metodopagoRoutes = require('./routes/metodopago.routes'); 
// const authRoutes = require('./routes/auth.routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// API Routes
// app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/metodopago', metodopagoRoutes);

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ 
        message: `No se puede encontrar ${req.originalUrl} en este servidor!` 
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Error interno del servidor'
    });
});

// Server configuration
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const BASE_URL = `http://localhost:${PORT}`;

// Start server
const server = app.listen(PORT, () => {
    console.log('=================================');
    console.log(`Server running on port ${PORT}`);
    console.log(` Environment: ${ENV}`);
    console.log('=================================');

    console.log('\nUSER ROUTES:');
    console.log(`GET ${BASE_URL}/api/users/profile - Get user profile (protected)`);
    console.log(`PUT ${BASE_URL}/api/users/update - Update user profile (protected)`);
    console.log(`DELETE ${BASE_URL}/api/users/delete - Delete user (protected)`);
    console.log(`GET ${BASE_URL}/api/users/dashboard - Get user dashboard (protected)`);

    console.log('\nEMPLEADOS ROUTES:');
    console.log(`GET ${BASE_URL}/api/empleados - Get all empleados`);
    console.log(`POST ${BASE_URL}/api/empleados - Create empleado`);
    console.log(`PUT ${BASE_URL}/api/empleados/:id - Update empleado`);
    console.log(`DELETE ${BASE_URL}/api/empleados/:id - Delete empleado`);
    console.log('=================================');

    console.log('\nINVENTARIO ROUTES:');
    console.log(`GET ${BASE_URL}/api/inventario - Get all inventarios`);
    console.log(`POST ${BASE_URL}/api/inventario - Create inventario`);
    console.log(`PUT ${BASE_URL}/api/inventario/:id - Update inventario`);
    console.log(`DELETE ${BASE_URL}/api/inventario/:id - Delete inventario`);
    console.log('=================================');

    console.log('\nMETODOPAGO ROUTES:');
    console.log(`GET ${BASE_URL}/api/metodopago - Get all metodopagos`);
    console.log(`POST ${BASE_URL}/api/metodopago - Create metodopago`);
    console.log(`PUT ${BASE_URL}/api/metodopago/:id - Update metodopago`);
    console.log(`DELETE ${BASE_URL}/api/metodopago/:id - Delete metodopago`);
    console.log('=================================');
});
