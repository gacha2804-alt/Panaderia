const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM personas');
    return rows;
};

exports.findById = async (IdPersona) => {
    const [rows] = await db.execute(
        'SELECT * FROM personas WHERE IdPersona = ?',
        [IdPersona]
    );
    return rows[0];
};

exports.create = async (newUser) => {
    const [result] = await db.execute(
        `INSERT INTO personas 
        (IdPersona,Nombre1, Nombre2, Apellido1, Apellido2, Direccion, Celular1, Email, Cargo, Contrasena) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            newUser.IdPersona,
            newUser.Nombre1,
            newUser.Nombre2,
            newUser.Apellido1,
            newUser.Apellido2,
            newUser.Direccion,
            newUser.Celular1,
            newUser.Email,
            newUser.Cargo,
            newUser.Contrasena 
        ]
    );
    return { IdPersona: result.insertId, ...newUser };
};

exports.update = async (IdPersona, updatedUser) => {
    const [result] = await db.execute(
        `UPDATE personas 
        SET IdPersona=?, Nombre1 = ?, Nombre2 = ?, Apellido1 = ?, Apellido2 = ?, Direccion = ?, Celular1 = ?, Email = ?, Cargo = ?, Contrasena = ? 
        WHERE IdPersona = ?`,
        [
            updatedUser.IdPersona,
            updatedUser.Nombre1,
            updatedUser.Nombre2,
            updatedUser.Apellido1,
            updatedUser.Apellido2,
            updatedUser.Direccion,
            updatedUser.Celular1,
            updatedUser.Email,
            updatedUser.Cargo,
            updatedUser.Contrasena,
            IdPersona
        ]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdPersona) => {
    const [result] = await db.execute(
        'DELETE FROM personas WHERE IdPersona = ?',
        [IdPersona]
    );
    return result.affectedRows > 0;
};
