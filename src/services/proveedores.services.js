const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM proveedores');
    return rows;
};

exports.findById = async (Idproveedor) => {
    const [rows] = await db.execute('SELECT * FROM proveedores WHERE Idproveedors = ?', [Idproveedor]);
    return rows[0];
};

exports.create = async (newproveedores) => {
    const [result] = await db.execute(
        'INSERT INTO proveedores (TipoProducto) VALUES ( ?)',
        [ newproveedores.TipoProducto]
    );
    return { id: result.insertId, ...newproveedores };
};

exports.update = async (Idproveedor, updatedproveedores) => {
    const [result] = await db.execute(
        'UPDATE proveedores SET TipoProducto= ? WHERE Idproveedor = ?',
        [ updatedproveedores.TipoProducto, Idproveedor]
    );
    return result.affectedRows > 0;
};

exports.remove = async (Idproveedor) => {
    const [result] = await db.execute('DELETE FROM proveedores WHERE Idproveedor= ?', [Idproveedor]);

    return result.affectedRows > 0;
};