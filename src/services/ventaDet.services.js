const db = require('../config/db.config');


exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM ventaDet');
    return rows;
};


exports.findById = async (IdVentaD) => {
    const [rows] = await db.execute('SELECT * FROM ventaDet WHERE IdVentaD = ?', [IdVentaD]);
    return rows[0];
};


exports.create = async (newventaDet) => {
    const [result] = await db.execute(
        'INSERT INTO ventaDet (Cantidad, ValorUnitario, Total) VALUES (?, ?, ?)',
        [newventaDet.Cantidad, newventaDet.ValorUnitario, newventaDet.Total]
    );
    return { IdVentaD: result.insertId, ...newventaDet };
};


exports.update = async (IdVentaD, updatedventaDet) => {
    const [result] = await db.execute(
        'UPDATE ventaDet SET Cantidad = ?, ValorUnitario = ?, Total = ? WHERE IdVentaD = ?',
        [updatedventaDet.Cantidad, updatedventaDet.ValorUnitario, updatedventaDet.Total, IdVentaD]
    );
    return result.affectedRows > 0;
};


exports.remove = async (IdVentaD) => {
    const [result] = await db.execute('DELETE FROM ventaDet WHERE IdVentaD = ?', [IdVentaD]);
    return result.affectedRows > 0;
};
