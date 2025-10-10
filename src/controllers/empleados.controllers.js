

const empleadosServices = require('../services/empleados.services');

// Obtener todos los empleados
exports.findAll = async (req, res) => {
    try {
        const empleados = await empleadosServices.findAll();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados", error: error.message });
    }
};

// Obtener empleado por ID
exports.findById = async (req, res) => {
    const { IdEmpleado } = req.params;
    if (!IdEmpleado) {
        return res.status(400).json({ message: "Falta el parámetro IdEmpleado" });
    }
    try {
        const empleado = await empleadosServices.findById(IdEmpleado);
        if (!empleado) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el empleado", error: error.message });
    }
};

//Crear nuevo empleado
exports.create = async (req, res) => {
    try {
        const newEmpleado = await empleadosServices.create(req.body);
        res.status(201).json(newEmpleado);
    } catch (error) {
        res.status(500).json({ message: "Error al crear empleado", error: error.message });
    }
};

//Actualizar empleado existente
exports.update = async (req, res) => {
    const { IdEmpleado } = req.params;
    if (!IdEmpleado) {
        return res.status(400).json({ message: "Falta el parámetro IdEmpleado" });
    }
    try {
        const updated = await empleadosServices.update(IdEmpleado, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        res.status(200).json({ message: "Empleado actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleado", error: error.message });
    }
};

//Eliminar empleado
exports.remove = async (req, res) => {
    const { IdEmpleado } = req.params;
    if (!IdEmpleado) {
        return res.status(400).json({ message: "Falta el parámetro IdEmpleado" });
    }
    try {
        const removed = await empleadosServices.remove(IdEmpleado);
        if (!removed) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        res.status(200).json({ message: "Empleado eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar empleado", error: error.message });
    }
};
