const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM productos');
    return rows;
};

exports.findById = async (IdProducto) => {
    const [rows] = await db.execute('SELECT * FROM productos WHERE IdProducto = ?', [IdProducto]);
    return rows[0];
};

exports.create = async (newUser) => {
    // Quitar IdProducto porque debe ser auto-incremental
    const [result] = await db.execute(
        'INSERT INTO productos (NombreProducto, Cantidad, ValorUnitario, FechaVencimiento) VALUES (?, ?, ?, ?)',
        [newUser.NombreProducto, newUser.Cantidad, newUser.ValorUnitario, newUser.FechaVencimiento]
    );
    return { IdProducto: result.insertId, ...newUser };
};

exports.update = async (IdProducto, updatedUser) => {
    const [result] = await db.execute(
        'UPDATE productos SET NombreProducto = ?, Cantidad = ?, ValorUnitario = ?, FechaVencimiento = ? WHERE IdProducto = ?',
        [updatedUser.NombreProducto, updatedUser.Cantidad, updatedUser.ValorUnitario, updatedUser.FechaVencimiento, IdProducto]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdProducto) => {
    // Corregir tabla: parece que es productos, no user
    const [result] = await db.execute('DELETE FROM productos WHERE IdProducto = ?', [IdProducto]);
    return result.affectedRows > 0;
};
