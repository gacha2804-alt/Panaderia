const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM empleados');
    return rows;
};

exports.findById = async (IdEmpleados) => {
    const [rows] = await db.execute('SELECT * FROM empleados WHERE id = ?', [IdEmpleados]);
    return rows[0];
};

exports.create = async (newUser) => {
    const [result] = await db.execute(
        'INSERT INTO empleados (IdEmpleados, Salario) VALUES (?, ?)',
        [newUser.IdEmpleados, newUser.Salario]
    );
    return { id: result.insertId, ...newUser };
};

exports.update = async (IdEmpleados, updatedUser) => {
    const [result] = await db.execute(
        'UPDATE empleados SET IdEmpleados = ?, Salario = ? WHERE id = ?',
        [updatedUser.IdEmpleados, updatedUser.Salario, IdEmpleados]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdEmpleados) => {
    const [result] = await db.execute('DELETE FROM empleados WHERE IdEmpleados = ?', [IdEmpleados]); 
    return result.affectedRows > 0;
};