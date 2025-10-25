const db = require('../config/db.config');

class TipoDocService {
    async findAll() {
        const [rows] = await db.execute('SELECT * FROM tipodoc');
        return rows;
    }

    async findById(IdTipoDoc) {
        const [rows] = await db.execute('SELECT * FROM tipodoc WHERE IdTipoDoc = ?', [IdTipoDoc]);
        return rows[0];
    }

    async create(newTipoDoc) {
        const [result] = await db.execute(
            'INSERT INTO tipodoc (Descripcion) VALUES (?)',
            [newTipoDoc.Descripcion]
        );
        return { id: result.insertId, ...newTipoDoc };
    }

    async update(IdTipoDoc, updatedTipoDoc) {
        const [result] = await db.execute(
            'UPDATE tipodoc SET Descripcion = ? WHERE IdTipoDoc = ?',
            [updatedTipoDoc.Descripcion, IdTipoDoc]
        );
        return result.affectedRows > 0;
    }

    async remove(IdTipoDoc) {
        const [result] = await db.execute('DELETE FROM tipodoc WHERE IdTipoDoc = ?', [IdTipoDoc]);
        return result.affectedRows > 0;
    }
}

module.exports = TipoDocService;
