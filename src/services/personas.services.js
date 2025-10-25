const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM personas');
    return rows;
};

exports.findById = async (IdPersona) => {
    const [rows] = await db.execute('SELECT * FROM personas WHERE IdPersona = ?', [IdPersona]);
    return rows[0];
};

exports.create = async (newPersona) => {
    const [result] = await db.execute(
        `INSERT INTO personas 
        (IdPersona, Nombre1, Nombre2, Apellido1, Apellido2, Direccion, Celular1, Email, Cargo, Contrasena) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            newPersona.IdPersona,
            newPersona.Nombre1,
            newPersona.Nombre2,
            newPersona.Apellido1,
            newPersona.Apellido2,
            newPersona.Direccion,
            newPersona.Celular1,
            newPersona.Email,
            newPersona.Cargo,
            newPersona.Contrasena
        ]
    );
    return { IdPersona: result.insertId, ...newPersona };
};

exports.update = async (IdPersona, updatedPersona) => {
    const [result] = await db.execute(
        `UPDATE personas 
        SET IdPersona=?, Nombre1=?, Nombre2=?, Apellido1=?, Apellido2=?, Direccion=?, Celular1=?, Email=?, Cargo=?, Contrasena=? 
        WHERE IdPersona=?`,
        [
            updatedPersona.IdPersona,
            updatedPersona.Nombre1,
            updatedPersona.Nombre2,
            updatedPersona.Apellido1,
            updatedPersona.Apellido2,
            updatedPersona.Direccion,
            updatedPersona.Celular1,
            updatedPersona.Email,
            updatedPersona.Cargo,
            updatedPersona.Contrasena,
            IdPersona
        ]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdPersona) => {
    const [result] = await db.execute('DELETE FROM personas WHERE IdPersona = ?', [IdPersona]);
    return result.affectedRows > 0;
};
