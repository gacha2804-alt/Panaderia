require('dotenv').config();

const config = {
    // Configuración de la base de datos
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
<<<<<<< HEAD
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

=======
        database: process.env.DB_NAME || 'apiejemplo',
        port: process.env.DB_PORT || 3306
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

>>>>>>> emelin
module.exports = config;
