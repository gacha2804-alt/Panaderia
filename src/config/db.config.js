require('dotenv').config();

const config = {
    // Configuración de la base de datos
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'panaderia',
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
     
        connectionLimit: process.env.DB_CONNECTION_LIMIT ? Number(process.env.DB_CONNECTION_LIMIT) : 10,
        waitForConnections: true,
        queueLimit: 0
    },

    // Configuración de JWT
    jwt: {
        secret: process.env.JWT_SECRET || 'your-super-secret-key',
        expiresIn: process.env.JWT_EXPIRES || '24h'
    },

    // Configuración del servidor
    server: {
        port: process.env.PORT || 3000
    }
};

module.exports = config;
