const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM ventaEncab');
    return rows;
};

exports.findById = async (IdVenta) => {
    const [rows] = await db.execute('SELECT * FROM ventaEncab WHERE IdVenta = ?', [IdVenta]);
    return rows[0];
};

exports.create = async (newUser) => {
    const [result] = await db.execute(
        'INSERT INTO ventaEncab (IdVenta, FechaVenta, Id) VALUES (?, ?)',
        [newUser.IdVenta, newUser.FechaVenta]
    );
    return { id: result.insertId, ...newUser };
};

exports.update = async (IdVenta, updatedUser) => {
    const [result] = await db.execute(
        'UPDATE ventaEncab SET IdVenta = ?, FechaVenta = ? WHERE id = ?',
        [updatedUser.IdVenta, updatedUser.FechaVenta, IdVenta]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdVenta) => {
    const [result] = await db.execute('DELETE FROM ventaEncab WHERE id = ?', [IdVenta]); 
    return result.affectedRows > 0;
};