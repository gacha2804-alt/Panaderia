const ventaEncabServices = require('../services/ventaEncab.services');

exports.findAll = async (req, res) => {
    try {
        const ventaEncab = await ventaEncabServices.findAll();
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
        const ventaEncab = await ventaEncabServices.findById(IdVenta);
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
        const newVentaEncab = await ventaEncabServices.create(req.body);
        res.status(201).json(newVentaEncab);
    } catch (error) {
        res.status(500).json({ message: "Error al crear ventaEncab", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedVentaEncab = await ventaEncabServices.update(req.params.IdVenta, req.body);
        if (!updatedVentaEncab) {
            return res.status(404).json({ message: "ventaEncab no encontrado" });
        }
        res.status(200).json({ message: "ventaEncab actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar ventaEncab", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await ventaEncabServices.remove(req.params.IdVenta);
        if (!removed) {
            return res.status(404).json({ message: "ventaEncab no encontrado" });
        }
        res.status(200).json({ message: "ventaEncab eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar ventaEncab", error });
    }
};
