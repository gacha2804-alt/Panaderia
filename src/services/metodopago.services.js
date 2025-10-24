const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const config = require('../config/db.config');

class MetodoPagoService {
    constructor() {
        this.connection = mysql.createPool(config.db);
    }

    // Buscar método de pago por IdMetodoPago (equivalente a findById)
    async findByIdMetodoPago(IdMetodoPago) {
        const [rows] = await this.connection.execute(
            'SELECT * FROM metodopago WHERE IdMetodoPago = ?',
            [IdMetodoPago]
        );
        return rows[0];
    }

    // Crear nuevo método de pago
    async create(metodoPagoData) {
        const { NombMetodoPago } = metodoPagoData;

        const [result] = await this.connection.execute(
            'INSERT INTO metodopago (NombMetodoPago) VALUES (?)',
            [NombMetodoPago]
        );

        return {
            IdMetodoPago: result.insertId,
            NombMetodoPago
        };
    }

    async getProfile(IdMetodoPago) {
        const [rows] = await this.connection.execute(
            'SELECT IdMetodoPago, NombMetodoPago FROM metodopago WHERE IdMetodoPago = ?',
            [IdMetodoPago]
        );
        return rows[0];
    }

    async getPublicProfile(IdMetodoPago) {
        const [rows] = await this.connection.execute(
            'SELECT IdMetodoPago, NombMetodoPago FROM metodopago WHERE IdMetodoPago = ?',
            [IdMetodoPago]
        );
        return rows[0];
    }

    async update(IdMetodoPago, metodoPagoData) {
        const { NombMetodoPago } = metodoPagoData;

        await this.connection.execute(
            'UPDATE metodopago SET NombMetodoPago = ? WHERE IdMetodoPago = ?',
            [NombMetodoPago, IdMetodoPago]
        );

        return this.getProfile(IdMetodoPago);
    }

    // Eliminar método de pago
    async delete(IdMetodoPago) {
        await this.connection.execute(
            'DELETE FROM metodopago WHERE IdMetodoPago = ?',
            [IdMetodoPago]
        );
        return true;
    }

    // Cambiar contraseña (no aplica aquí, pero se deja para mantener la estructura)
    async changePassword() {
        throw new Error('Este método no aplica para métodos de pago.');
    }

    // Dashboard del método de pago (similar al UserService)
    async getDashboard(IdMetodoPago) {
        const [rows] = await this.connection.execute(
            'SELECT IdMetodoPago, NombMetodoPago FROM metodopago WHERE IdMetodoPago = ?',
            [IdMetodoPago]
        );
        return {
            metodoPago: rows[0]
        };
    }
}

module.exports = MetodoPagoService;
