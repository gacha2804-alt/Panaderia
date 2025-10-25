const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM proveedores');
    return rows;
};

exports.findById = async (IdProveedor) => {
    const [rows] = await db.execute('SELECT * FROM proveedores WHERE IdProveedor = ?', [IdProveedor]);
    return rows[0];
};

exports.create = async (newProveedor) => {
    const [result] = await db.execute(
        'INSERT INTO proveedores (TipoProducto) VALUES (?)',
        [newProveedor.TipoProducto]
    );
    return { id: result.insertId, ...newProveedor };
};

exports.update = async (IdProveedor, updatedProveedor) => {
    const [result] = await db.execute(
        'UPDATE proveedores SET TipoProducto = ? WHERE IdProveedor = ?',
        [updatedProveedor.TipoProducto, IdProveedor]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdProveedor) => {
    const [result] = await db.execute('DELETE FROM proveedores WHERE IdProveedor = ?', [IdProveedor]);
    return result.affectedRows > 0;
};
