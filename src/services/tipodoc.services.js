const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM tipodoc');
    return rows;
};

exports.findById = async (IdTipoDoc) => {
    const [rows] = await db.execute('SELECT * FROM tipodoc WHERE IdTipoDoc = ?', [IdTipoDoc]);
    return rows[0];
};

exports.create = async (newUser) => { 
    const [result] = await db.execute(
        'INSERT INTO tipodoc (IdTipoDoc, NomTipoDoc) VALUES (?, ?)',
        [newUser.IdTipoDoc, newUser.NomTipoDoc]
    );
    return { id: result.insertId, ...newUser };
};

exports.update = async (IdTipoDoc, updatedUser) => {
    const [result] = await db.execute(
        'UPDATE tipodoc SET IdTipoDoc = ?, NomTipoDoc = ? WHERE IdTipoDoc= ?',
        [updatedUser.IdTipoDoc, updatedUser.NomTipoDoc, IdTipoDoc]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdTipoDoc) => {
    const [result] = await db.execute('DELETE FROM tipodoc WHERE IdTipoDoc = ?', [IdTipoDoc]);
    return result.affectedRows > 0;
};
