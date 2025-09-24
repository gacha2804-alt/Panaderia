const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM empleados');
    return rows;
};

exports.findById = async (IdEmpleado) => {
    const [rows] = await db.execute('SELECT * FROM empleados WHERE IdEmpleado = ?', [IdEmpleado]);
    return rows[0];
};

exports.create = async (newempleados) => {
    
    const [result] = await db.execute(
        'INSERT INTO empleados ( Salario) VALUES ( ?)',
        [newempleados.Salario]
    );
    return { id: result.insertId, ...newempleados };
};

exports.update = async (IdEmpleado, updatedempleados) => {
    const [result] = await db.execute(
        'UPDATE empleados SET Salario = ? WHERE IdEmpleado = ?',
        [updatedempleados.Salario, IdEmpleado]
    );
    return result.affectedRows > 0;
};

exports.remove = async (IdEmpleado) => {
    const [result] = await db.execute('DELETE FROM empleados WHERE IdEmpleado = ?', [IdEmpleado]); 
    return result.affectedRows > 0;
};