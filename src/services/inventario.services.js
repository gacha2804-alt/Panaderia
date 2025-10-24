const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const config = require('../config/db.config');

class InventarioService {
    constructor() {
        this.connection = mysql.createPool(config.db);
    }

    async findByIdInventario(IdInventario) {
        const [rows] = await this.connection.execute(
            'SELECT * FROM inventario WHERE IdInventario = ?',
            [IdInventario]
        );
        return rows[0];
    }

    async create(inventarioData) {
        const { Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida } = inventarioData;

        const [result] = await this.connection.execute(
            'INSERT INTO inventario (Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida) VALUES (?, ?, ?, ?, ?)',
            [Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida]
        );

        return {
            IdInventario: result.insertId,
            Descripcion,
            TipoProductos,
            Cantidad,
            FechaEntrada,
            FechaSalida
        };
    }

    async getProfile(IdInventario) {
        const [rows] = await this.connection.execute(
            'SELECT IdInventario, Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida FROM inventario WHERE IdInventario = ?',
            [IdInventario]
        );
        return rows[0];
    }

    async getPublicProfile(IdInventario) {
        const [rows] = await this.connection.execute(
            'SELECT IdInventario, Descripcion, TipoProductos FROM inventario WHERE IdInventario = ?',
            [IdInventario]
        );
        return rows[0];
    }

    async update(IdInventario, inventarioData) {
        const { Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida } = inventarioData;

        await this.connection.execute(
            'UPDATE inventario SET Descripcion = ?, TipoProductos = ?, Cantidad = ?, FechaEntrada = ?, FechaSalida = ? WHERE IdInventario = ?',
            [Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida, IdInventario]
        );

        return this.getProfile(IdInventario);
    }

    async delete(IdInventario) {
        await this.connection.execute(
            'DELETE FROM inventario WHERE IdInventario = ?',
            [IdInventario]
        );
        return true;
    }

    async changePassword() {
        throw new Error('Este método no aplica para inventario.');
    }

    async getDashboard(IdInventario) {
        const [inventarioInfo] = await this.connection.execute(
            'SELECT IdInventario, Descripcion, TipoProductos, Cantidad FROM inventario WHERE IdInventario = ?',
            [IdInventario]
        );
        return {
            inventario: inventarioInfo[0]
        };
    }
}

module.exports = InventarioService;
