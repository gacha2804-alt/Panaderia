const db = require('../config/db.config');

exports.findAll = async () => {
  const [rows] = await db.execute('SELECT * FROM metodopago');
  return rows;
};

exports.findById = async (IdMetodoPago) => {
  const [rows] = await db.execute(
    'SELECT * FROM metodopago WHERE IdMetodoPago = ?',
    [IdMetodoPago]
  );
  return rows[0];
};

exports.create = async (data) => {
  const { NombreMetodo, Descripcion } = data;
  const [result] = await db.execute(
    'INSERT INTO metodopago (NombreMetodo, Descripcion) VALUES (?, ?)',
    [NombreMetodo, Descripcion]
  );
  return { IdMetodoPago: result.insertId, NombreMetodo, Descripcion };
};

exports.update = async (IdMetodoPago, data) => {
  const { NombreMetodo, Descripcion } = data;
  const [result] = await db.execute(
    'UPDATE metodopago SET NombreMetodo = ?, Descripcion = ? WHERE IdMetodoPago = ?',
    [NombreMetodo, Descripcion, IdMetodoPago]
  );
  return result.affectedRows > 0;
};

exports.remove = async (IdMetodoPago) => {
  const [result] = await db.execute(
    'DELETE FROM metodopago WHERE IdMetodoPago = ?',
    [IdMetodoPago]
  );
  return result.affectedRows > 0;
};
