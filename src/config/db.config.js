require('dotenv').config();

const config = {
    // Configuración de la base de datos
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'tu_base_de_datos',
        port: process.env.DB_PORT || 3306,
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0
    },

    // Configuración del servidor
    server: {
        port: process.env.PORT || 3000
    }
};

module.exports = config;
