const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM tipodoc');
    return rows;
};

exports.findById = async (IdTipoDoc) => {
    const [rows] = await db.execute('SELECT * FROM tipodoc WHERE IdTipoDoc = ?', [IdTipoDoc]);
    return rows[0];
};

exports.create = async (newtipodoc) => { 
    const [result] = await db.execute(
        'INSERT INTO tipodoc (IdTipoDoc, NomTipoDoc) VALUES (?, ?)',
        [newtipodoc.IdTipoDoc, newtipodoc.NomTipoDoc]
    );
    return { id: result.insertId, ...newtipodoc };
};

exports.update = async (IdTipoDoc, updatedtipodoc) => {
    const [result] = await db.execute(
        'UPDATE tipodoc SET  NomTipoDoc = ? WHERE IdTipoDoc= ?',
        [updatedtipodoc.NomTipoDoc, IdTipoDoc]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdTipoDoc) => {
    const [result] = await db.execute('DELETE FROM tipodoc WHERE IdTipoDoc = ?', [IdTipoDoc]);
    return result.affectedRows > 0;
};
