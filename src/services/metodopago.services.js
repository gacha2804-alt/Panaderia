const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM metodopago');
    return rows;
};

exports.findById = async (IdMetodoPago) => {
    const [rows] = await db.execute('SELECT * FROM metodopago WHERE IdMetodoPago = ?', [IdMetodoPago]);
    return rows[0];
};

exports.create = async (newmetodopago) => {
    const [result] = await db.execute(
        'INSERT INTO metodopago ( NombMetodoPago) VALUES (? )',
        [ newmetodopago.NombMetodoPago]
    );
    return { id: result.insertId, ...newmetodopago };
};

exports.update = async (IdMetodoPago, updatedmetodopago) => {
    const [result] = await db.execute(
        'UPDATE metodopago SET NombMetodoPago = ? WHERE IdMetodoPago = ?',
        [ updatedmetodopago.NombMetodoPago, IdMetodoPago]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdMetodoPago) => {
    const [result] = await db.execute('DELETE FROM metodopago WHERE IdMetodoPago= ?', [IdMetodoPago]); 
    return result.affectedRows > 0;
};