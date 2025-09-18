const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM metodopago');
    return rows;
};

exports.findById = async (IdMetodoPago) => {
    const [rows] = await db.execute('SELECT * FROM metodopago WHERE IdMetodoPago = ?', [IdMetodoPago]);
    return rows[0];
};

exports.create = async (newUser) => {
    const [result] = await db.execute(
        'INSERT INTO metodopago (IdMetodoPago, NombMetodoPago) VALUES (?, ?)',
        [newUser.IdMetodoPago, newUser.NombMetodoPago]
    );
    return { id: result.insertId, ...newUser };
};

exports.update = async (IdMetodoPago, updatedUser) => {
    const [result] = await db.execute(
        'UPDATE metodopago SET IdMetodoPago = ?, NombMetodoPago = ? WHERE id = ?',
        [updatedUser.IdMetodoPago, updatedUser.NombMetodoPago, IdMetodoPago]
    );
    return result.affectedRows > 0;
};

exports.remove = async (id) => {
    const [result] = await db.execute('DELETE FROM metodopago WHERE id = ?', [IdMetodoPago]); 
    return result.affectedRows > 0;
};