const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM ventaDet');
    return rows;
};

exports.findById = async (IdVentaD) => {
    const [rows] = await db.execute('SELECT * FROM ventaDet WHERE IdVentaD = ?', [IdVentaD]);
    return rows[0];
};

exports.create = async (ventaDet) => {
    const [result] = await db.execute(
        'INSERT INTO ventaDet (Cantidad, ValorUnitario, Total) VALUES (?, ?, ?)',
        [ventaDet.Cantidad, ventaDet.ValorUnitario, ventaDet.Total]
    );
    return { IdVentaD: result.insertId, ...ventaDet };
};

exports.update = async (IdVentaD, ventaDet) => {
    const [result] = await db.execute(
        'UPDATE ventaDet SET Cantidad = ?, ValorUnitario = ?, Total = ? WHERE IdVentaD = ?',
        [ventaDet.Cantidad, ventaDet.ValorUnitario, ventaDet.Total, IdVentaD]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdVentaD) => {
    const [result] = await db.execute('DELETE FROM ventaDet WHERE IdVentaD = ?', [IdVentaD]);
    return result.affectedRows > 0;
};
