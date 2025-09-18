const ventaDetService = require('../services/ventaDet.services'); 

exports.findAll = async (req, res) => {
    try {
        const ventaDets = await ventaDetService.findAll();
        res.status(200).json(ventaDets);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener ventaDet", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const ventaDet = await ventaDetService.findById(req.params.id);
        if (!ventaDet) {
            return res.status(404).json({ message: "ventaDet no encontrado" });
        }
        res.status(200).json(ventaDet);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el ventaDet", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newventaDet = await ventaDetService.create(req.body);
        res.status(201).json(newventaDet);
    } catch (error) {
        res.status(500).json({ message: "Error al crear ventaDet", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await ventaDetService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "ventaDet no encontrado" });
        }
        res.status(200).json({ message: "ventaDet actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar ventaDet", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await ventaDetService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "ventaDet no encontrado" });
        }
        res.status(200).json({ message: "ventaDet eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar ventaDet", error });
    }
};