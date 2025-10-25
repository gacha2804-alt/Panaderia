const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM ventaEncab');
    return rows;
};

exports.findById = async (IdVenta) => {
    const [rows] = await db.execute('SELECT * FROM ventaEncab WHERE IdVenta = ?', [IdVenta]);
    return rows[0];
};

exports.create = async (ventaEncab) => {
    const [result] = await db.execute(
        'INSERT INTO ventaEncab (Fecha, IdCliente, Total) VALUES (?, ?, ?)',
        [ventaEncab.Fecha, ventaEncab.IdCliente, ventaEncab.Total]
    );
    return { IdVenta: result.insertId, ...ventaEncab };
};

exports.update = async (IdVenta, ventaEncab) => {
    const [result] = await db.execute(
        'UPDATE ventaEncab SET Fecha = ?, IdCliente = ?, Total = ? WHERE IdVenta = ?',
        [ventaEncab.Fecha, ventaEncab.IdCliente, ventaEncab.Total, IdVenta]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdVenta) => {
    const [result] = await db.execute('DELETE FROM ventaEncab WHERE IdVenta = ?', [IdVenta]);
    return result.affectedRows > 0;
};
