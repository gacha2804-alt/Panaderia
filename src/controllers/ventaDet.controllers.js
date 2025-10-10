const ventaDetServices = require('../services/ventaDet.services');

exports.findAll = async (req, res) => {
    try {
        const ventaDets = await ventaDetServices.findAll();
        res.status(200).json(ventaDets);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener ventaDet", error });
    }
};

exports.findById = async (req, res) => {
    const IdVentaD = req.params.IdVentaD;
    try {
        const ventaDet = await ventaDetServices.findById(IdVentaD);
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
        const newVentaDet = await ventaDetServices.create(req.body);
        res.status(201).json(newVentaDet);
    } catch (error) {
        res.status(500).json({ message: "Error al crear ventaDet", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedVentaDet = await ventaDetServices.update(req.params.IdVentaD, req.body);
        if (!updatedVentaDet) {
            return res.status(404).json({ message: "ventaDet no encontrado" });
        }
        res.status(200).json({ message: "ventaDet actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar ventaDet", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await ventaDetServices.remove(req.params.IdVentaD);
        if (!removed) {
            return res.status(404).json({ message: "ventaDet no encontrado" });
        }
        res.status(200).json({ message: "ventaDet eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar ventaDet", error });
    }
};
