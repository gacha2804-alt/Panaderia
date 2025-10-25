const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM inventario');
    return rows;
};

exports.findById = async (IdInventario) => {
    const [rows] = await db.execute('SELECT * FROM inventario WHERE IdInventario = ?', [IdInventario]);
    return rows[0];
};

exports.create = async (newinventario) => {
    const [result] = await db.execute(
        'INSERT INTO inventario ( Descripcion, TipoProductos, Cantidad, FechaEntrada, FechaSalida) VALUES ( ?, ?, ?, ?, ?)',
        [ newinventario.Descripcion, newinventario.TipoProductos, newinventario.Cantidad, newinventario.FechaEntrada, newinventario.FechaSalida]
    );
    return { id: result.insertId, ...newinventario };
};

exports.update = async (IdInventario, updatedinventario) => {
    const [result] = await db.execute(
        'UPDATE inventario SET  Descripcion = ?, TipoProductos = ?, Cantidad = ?, FechaEntrada = ?, FechaSalida = ? WHERE IdInventario = ?',
        [updatedinventario.Descripcion, updatedinventario.TipoProductos, updatedinventario.Cantidad, updatedinventario.FechaEntrada, updatedinventario.FechaSalida, IdInventario]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdInventario) => {
    const [result] = await db.execute('DELETE FROM inventario WHERE IdInventario = ?', [IdInventario]);
    return result.affectedRows > 0;
};