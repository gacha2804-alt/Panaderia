const mysql = require('mysql2/promise');
const config = require('../config/db.config');

class TipoDocService {
    constructor() {
        this.connection = mysql.createPool(config.db);
    }

    // PUBLICO
    async findAll() {
        const [rows] = await this.connection.execute('SELECT * FROM tipodoc');
        return rows;
    }

    async findById(IdTipoDoc) {
        const [rows] = await this.connection.execute(
            'SELECT * FROM tipodoc WHERE IdTipoDoc = ?',
            [IdTipoDoc]
        );
        return rows[0];
    }

    // PRIVADOS 
    async create(newTipoDoc) {
        const { IdTipoDoc, NomTipoDoc } = newTipoDoc;

        const [result] = await this.connection.execute(
            'INSERT INTO tipodoc (IdTipoDoc, NomTipoDoc) VALUES (?, ?)',
            [IdTipoDoc, NomTipoDoc]
        );

        return {
            id: result.insertId,
            IdTipoDoc,
            NomTipoDoc
        };
    }

    async update(IdTipoDoc, updatedTipoDoc) {
        const { NomTipoDoc } = updatedTipoDoc;

        const [result] = await this.connection.execute(
            'UPDATE tipodoc SET NomTipoDoc = ? WHERE IdTipoDoc = ?',
            [NomTipoDoc, IdTipoDoc]
        );

        return result.affectedRows > 0;
    }

    async delete(IdTipoDoc) {
        const [result] = await this.connection.execute(
            'DELETE FROM tipodoc WHERE IdTipoDoc = ?',
            [IdTipoDoc]
        );

        return result.affectedRows > 0;
    }
}

module.exports = TipoDocService;
