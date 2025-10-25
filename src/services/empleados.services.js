const db = require('../config/db.config');

exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM empleados");
  return rows;
};

exports.findById = async (IdEmpleado) => {
  const [rows] = await db.query("SELECT * FROM empleados WHERE IdEmpleado = ?", [IdEmpleado]);
  return rows[0];
};

exports.create = async (empleadoData) => {
  const { Nombre, Cargo, Telefono } = empleadoData;
  const [result] = await db.query(
    "INSERT INTO empleados (Nombre, Cargo, Telefono) VALUES (?, ?, ?)",
    [Nombre, Cargo, Telefono]
  );
  return { IdEmpleado: result.insertId, ...empleadoData };
};

exports.update = async (IdEmpleado, empleadoData) => {
  const { Nombre, Cargo, Telefono } = empleadoData;
  const [result] = await db.query(
    "UPDATE empleados SET Nombre = ?, Cargo = ?, Telefono = ? WHERE IdEmpleado = ?",
    [Nombre, Cargo, Telefono, IdEmpleado]
  );
  return result.affectedRows > 0;
};

exports.remove = async (IdEmpleado) => {
  const [result] = await db.query("DELETE FROM empleados WHERE IdEmpleado = ?", [IdEmpleado]);
  return result.affectedRows > 0;
};
