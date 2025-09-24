const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM ventaEncab');
    return rows;
};

exports.findById = async (IdVenta) => {
    const [rows] = await db.execute('SELECT * FROM ventaEncab WHERE IdVenta = ?', [IdVenta]);
    return rows[0];
};

exports.create = async (newventaEncab) => {
    const [result] = await db.execute(
        'INSERT INTO ventaEncab ( FechaVenta) VALUES (?)',
        [ newventaEncab.FechaVenta]
    );
    return { id: result.insertId, ...newventaEncab };
};

exports.update = async (IdVenta, updatedventaEncab) => {
    const [result] = await db.execute(
        'UPDATE ventaEncab SET  FechaVenta = ? WHERE IdVenta= ?',
        [ updatedventaEncab.FechaVenta, IdVenta]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdVenta) => {
    const [result] = await db.execute('DELETE FROM ventaEncab WHERE IdVenta = ?', [IdVenta]); 
    return result.affectedRows > 0;
};