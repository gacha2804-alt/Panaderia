const ventaEncabService = require('../services/ventaEncab.services'); 

exports.findAll = async (req, res) => {
    try {
        const ventaEncabs = await ventaEncabService.findAll();
        res.status(200).json(ventaEncabs);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener ventaEncab", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const ventaEncab = await ventaEncabService.findById(req.params.id);
        if (!ventaEncab) {
            return res.status(404).json({ message: "ventaEncab no encontrado" });
        }
        res.status(200).json(ventaEncab);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el ventaEncab", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newventaEncab = await ventaEncabService.create(req.body);
        res.status(201).json(newventaEncab);
    } catch (error) {
        res.status(500).json({ message: "Error al crear ventaEncab", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await ventaEncabService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "ventaEncab no encontrado" });
        }
        res.status(200).json({ message: "ventaEncab actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar ventaEncab", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await ventaEncabService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "ventaEncab no encontrado" });
        }
        res.status(200).json({ message: "ventaEncab eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar ventaEncab", error });
    }
};