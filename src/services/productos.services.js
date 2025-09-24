const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM producto');
    return rows;
};

exports.findById = async (IdProducto) => {
    const [rows] = await db.execute('SELECT * FROM producto WHERE IdProducto = ?', [IdProducto]);
    return rows[0];
};

exports.create = async (newproductos) => {
    
    const [result] = await db.execute(
        'INSERT INTO producto (NombreProducto, Cantidad, ValorUnitario, FechaVencimiento) VALUES (?, ?, ?, ?)',
        [newproductos.NombreProducto, newproductos.Cantidad, newproductos.ValorUnitario, newproductos.FechaVencimiento]
    );
    return { id: result.insertId, ...newproductos };
};

exports.update = async (IdProducto, updatedproductos) => {
    const [result] = await db.execute(
        'UPDATE producto SET NombreProducto = ?, Cantidad = ?, ValorUnitario = ?, FechaVencimiento = ? WHERE IdProducto = ?',
        [updatedproductos.NombreProducto, updatedproductos.Cantidad, updatedproductos.ValorUnitario, updatedproductos.FechaVencimiento, IdProducto]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdProducto) => {
    const [result] = await db.execute('DELETE FROM producto WHERE IdProducto = ?', [IdProducto]);
    return result.affectedRows > 0;
};
