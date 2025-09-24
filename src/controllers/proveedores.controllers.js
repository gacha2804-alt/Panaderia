const proveedoresService = require('../services/proveedores.services');

exports.findAll = async (req, res) => {
    try {
        const proveedores = await proveedoresService.findAll();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener proveedores", error });
    }
};
//valida que el id este presente
exports.findById = async (req, res) => {
    const Idproveedor = req.params.Idproveedor;
    if (!Idproveedor) {
        return res.status(400).json({ message: "Falta el parámetro Idproveedor" });
    }
    try {
        const proveedores = await proveedoresService.findById(Idproveedor);
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
        const updatedproveedores= await proveedoresService.update(req.params.Idproveedor, req.body);
        if (!updatedproveedores) {
            return res.status(404).json({ message: "proveedores no encontrado" });
        }
        res.status(200).json({ message: "proveedores actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar proveedores", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await proveedoresService.remove(req.params.Idproveedor);
        if (!removed) {
            return res.status(404).json({ message: "proveedores no encontrado" });
        }
        res.status(200).json({ message: "proveedores eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "proveedores al eliminar usuario", error });
    }
};