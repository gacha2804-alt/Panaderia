const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM producto');
    return rows;
};

exports.findById = async (IdProducto) => {
    const [rows] = await db.execute('SELECT * FROM producto WHERE IdProducto = ?', [IdProducto]);
    return rows[0];
};

exports.create = async (newProducto) => {
    const [result] = await db.execute(
        'INSERT INTO producto (NombreProducto, Cantidad, ValorUnitario, FechaVencimiento) VALUES (?, ?, ?, ?)',
        [newProducto.NombreProducto, newProducto.Cantidad, newProducto.ValorUnitario, newProducto.FechaVencimiento]
    );
    return { IdProducto: result.insertId, ...newProducto };
};

exports.update = async (IdProducto, updatedProducto) => {
    const [result] = await db.execute(
        'UPDATE producto SET NombreProducto = ?, Cantidad = ?, ValorUnitario = ?, FechaVencimiento = ? WHERE IdProducto = ?',
        [updatedProducto.NombreProducto, updatedProducto.Cantidad, updatedProducto.ValorUnitario, updatedProducto.FechaVencimiento, IdProducto]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdProducto) => {
    const [result] = await db.execute('DELETE FROM producto WHERE IdProducto = ?', [IdProducto]);
    return result.affectedRows > 0;
};
