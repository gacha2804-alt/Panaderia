const empleadosService = require('../services/empleados.services'); 

exports.findAll = async (req, res) => {
    try {
        const empleados = await empleadosService.findAll();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados", error });
    }
};
//valida que el id este presente
exports.findById = async (req, res) => {
    const IdEmpleado = req.params.IdEmpleado;
    if (!IdEmpleado) {
        return res.status(400).json({ message: "Falta el parámetro IdEmpleado" });
    }
    try {
        const empleados = await empleadosService.findById(IdEmpleado);
        if (!empleados) {
            return res.status(404).json({ message: "empleados no encontrado" });
        }
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el empleados", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newempleados = await empleadosService.create(req.body);
        res.status(201).json(newempleados);
    } catch (error) {
        res.status(500).json({ message: "Error al crear empleados", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedempleados = await empleadosService.update(req.params.IdEmpleado, req.body);
        if (!updatedempleados) {
            return res.status(404).json({ message: "empleados no encontrado" });
        }
        res.status(200).json({ message: "empleados actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleados", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await empleadosService.remove(req.params.IdEmpleado);
        if (!removed) {
            return res.status(404).json({ message: "empleados no encontrado" });
        }
        res.status(200).json({ message: "empleados eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar empleados", error });
    }
};