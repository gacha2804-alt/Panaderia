const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM ventaDet');
    return rows;
};

exports.findById = async (IdVentaD) => {
    const [rows] = await db.execute('SELECT * FROM ventaDet WHERE IdVentaD = ?', [IdVentaD]);
    return rows[0];
};

exports.create = async (newUser) => {
    const [result] = await db.execute(
        'INSERT INTO ventaDet (IdVentaD, IdProducto, Cantidad, ValorUnitario, Total) VALUES (?, ?)',
        [newUser.IdVentaD, newUser.IdProducto, newUser.Cantidad, newUser.ValorUnitario, newUser.Total]
    );
    return { id: result.insertId, ...newUser };
};

exports.update = async (id, updatedUser) => {
    const [result] = await db.execute(
        'UPDATE ventaDet SET IdVentaD = ?, IdProducto = ? WHERE id = ?',
        [updatedUser.IdVentaD, updatedUser.IdProducto, updatedUser.Cantidad, updatedUser.ValorUnitario, updatedUser.Total, IdVentaD]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdVentaD) => {
    const [result] = await db.execute('DELETE FROM ventaDet WHERE id = ?', [IdVentaD]); 
    return result.affectedRows > 0;
};