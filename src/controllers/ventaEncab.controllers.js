const ventaEncabService = require('../services/ventaEncab.services'); 

exports.findAll = async (req, res) => {
    try {
        const ventaEncab = await ventaEncabService.findAll();
        res.status(200).json(ventaEncab);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener ventaEncab", error });
    }
};

exports.findById = async (req, res) => {
    const IdVenta = req.params.IdVenta;
    if (!IdVenta) {
        return res.status(400).json({ message: "Falta el parámetro IdVenta" });
    }
    try {
        const ventaEncab = await ventaEncabService.findById(IdVenta);
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
        const updatedventaEncab = await ventaEncabService.update(req.params.IdVenta, req.body);
        if (!updatedventaEncab) {
            return res.status(404).json({ message: "ventaEncab no encontrado" });
        }
        res.status(200).json({ message: "ventaEncab actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar ventaEncab", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await ventaEncabService.remove(req.params.IdVenta);
        if (!removed) {
            return res.status(404).json({ message: "ventaEncab no encontrado" });
        }
        res.status(200).json({ message: "ventaEncab eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar ventaEncab", error });
    }
};