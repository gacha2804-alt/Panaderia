const empleadosService = require('../services/empleados.services'); 

exports.findAll = async (req, res) => {
    try {
        const empleadoss = await empleadosService.findAll();
        res.status(200).json(empleadoss);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const empleados = await empleadosService.findById(req.params.id);
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
        const updated = await empleadosService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "empleados no encontrado" });
        }
        res.status(200).json({ message: "empleados actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleados", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await empleadosService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "empleados no encontrado" });
        }
        res.status(200).json({ message: "empleados eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar empleados", error });
    }
};