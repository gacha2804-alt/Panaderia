const proveedoresService = require('../services/proveedores.services');

exports.findAll = async (req, res) => {
    try {
        const proveedores = await proveedoresService.findAll();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener proveedores", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const proveedores = await proveedoresService.findById(req.params.id);
        if (!proveedores) {
            return res.status(404).json({ message: "proveedores no encontrado" });
        }
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el proveedores", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newproveedores = await proveedoresService.create(req.body);
        res.status(201).json(newproveedores);
    } catch (error) {
        res.status(500).json({ message: "Error al crear proveedores", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await proveedoresService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "proveedores no encontrado" });
        }
        res.status(200).json({ message: "proveedores actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar proveedores", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await proveedoresService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "proveedores no encontrado" });
        }
        res.status(200).json({ message: "proveedores eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "proveedores al eliminar usuario", error });
    }
};