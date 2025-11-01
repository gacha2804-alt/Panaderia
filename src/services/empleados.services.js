const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const config = require('../config/db.config');

class EmpleadoService {
    constructor() {
        this.connection = mysql.createPool(config.db);
    }

    // Buscar empleado por IdEmpleado (equivalente a findById)
    async findByIdEmpleado(IdEmpleado) {
        const [rows] = await this.connection.execute(
            'SELECT * FROM empleados WHERE IdEmpleado = ?',
            [IdEmpleado]
        );
        return rows[0];
    }

    // Crear nuevo empleado (usa bcrypt solo como en UserService, aunque aquí no hay password)
    async create(empleadoData) {
        const { Salario } = empleadoData;

        const [result] = await this.connection.execute(
            'INSERT INTO empleados (Salario) VALUES (?)',
            [Salario]
        );

        return {
            IdEmpleado: result.insertId,
            Salario
        };
    }

    // Obtener perfil del empleado (equivale a getProfile)
    async getProfile(IdEmpleado) {
        const [rows] = await this.connection.execute(
            'SELECT IdEmpleado, Salario FROM empleados WHERE IdEmpleado = ?',
            [IdEmpleado]
        );
        return rows[0];
    }

    // Obtener perfil público (equivalente a getPublicProfile)
    async getPublicProfile(IdEmpleado) {
        const [rows] = await this.connection.execute(
            'SELECT IdEmpleado, Salario FROM empleados WHERE IdEmpleado = ?',
            [IdEmpleado]
        );
        return rows[0];
    }

    // Actualizar empleado
    async update(IdEmpleado, empleadoData) {
        const { Salario } = empleadoData;

        await this.connection.execute(
            'UPDATE empleados SET Salario = ? WHERE IdEmpleado = ?',
            [Salario, IdEmpleado]
        );

        return this.getProfile(IdEmpleado);
    }

    // Eliminar empleado
    async delete(IdEmpleado) {
        await this.connection.execute(
            'DELETE FROM empleados WHERE IdEmpleado = ?',
            [IdEmpleado]
        );
        return true;
    }

    // Cambiar contraseña (no aplica realmente aquí, pero lo dejamos para que coincida con la estructura)
    async changePassword() {
        throw new Error('Este método no aplica para empleados porque no tienen contraseña.');
    }

    // Dashboard del empleado (similar al UserService)
    async getDashboard(IdEmpleado) {
        const [rows] = await this.connection.execute(
            'SELECT IdEmpleado, Salario FROM empleados WHERE IdEmpleado = ?',
            [IdEmpleado]
        );
        return {
            empleado: rows[0]
        };
    }
}

module.exports = EmpleadoService;
