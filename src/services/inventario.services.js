const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM inventario');
    return rows;
};

exports.findById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM inventario WHERE IdInventario = ?', [id]);
    return rows[0];
};

exports.create = async (newInventario) => {
    const [result] = await db.execute(
        'INSERT INTO inventario (IdProducto, Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida) VALUES (?, ?, ?, ?, ?, ?)',
        [newInventario.IdProducto, newInventario.Descripcion, newInventario.TipoProductos, newInventario.Cantidad, newInventario.FechaEntrada, newInventario.FechaSalida]
    );
    return { IdInventario: result.insertId, ...newInventario };
};

exports.update = async (id, updatedInventario) => {
    const [result] = await db.execute(
        'UPDATE inventario SET IdProducto = ?, Descripcion = ?, TipoProductos = ?, Cantidad = ?, FechaEntrada = ?, FechaSalida = ? WHERE IdInventario = ?',
        [updatedInventario.IdProducto, updatedInventario.Descripcion, updatedInventario.TipoProductos, updatedInventario.Cantidad, updatedInventario.FechaEntrada, updatedInventario.FechaSalida, id]
    );
    return result.affectedRows > 0;
};

exports.remove = async (id) => {
    const [result] = await db.execute('DELETE FROM inventario WHERE IdInventario = ?', [id]);
    return result.affectedRows > 0;
};