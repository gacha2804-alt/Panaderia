const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM proveedores');
    return rows;
};

exports.findById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM proveedores WHERE Idproveedors = ?', [id]);
    return rows[0];
};

exports.create = async (newproveedores) => {
    const [result] = await db.execute(
        'INSERT INTO proveedores (Idproveedors, IdPersona,TipoProducto) VALUES (?, ?, ?)',
        [newproveedores.Idproveedor, newproveedores.IdPersona, newproveedores.TipoProducto]
    );
    return { id: result.insertId, ...newproveedores };
};

exports.update = async (id, updatedproveedores) => {
    const [result] = await db.execute(
        'UPDATE proveedores SET Idproveedors = ?, IdPersona = ? , TipoProducto= ? WHERE id = ?',
        [updatedproveedores.Idproveedors, updatedproveedores.IdPersona, updatedproveedores.TipoProducto, id]
    );
    return result.affectedRows > 0;
};

exports.remove = async (Idproveedors) => {
    const [result] = await db.execute('DELETE FROM proveedores WHERE id = ?', [Idproveedors]);

    return result.affectedRows > 0;
};