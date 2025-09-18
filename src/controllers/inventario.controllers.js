const inventarioService = require('../services/inventario.services');

exports.findAll = async (req, res) => {
    try {
        const inventario = await inventarioService.findAll();
        res.status(200).json(inventario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener inventario", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const inventario = await inventarioService.findById(req.params.id);
        if (!inventario) {
            return res.status(404).json({ message: "Elemento de inventario no encontrado" });
        }
        res.status(200).json(inventario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el inventario", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newInventario = await inventarioService.create(req.body);
        res.status(201).json(newInventario);
    } catch (error) {
        res.status(500).json({ message: "Error al crear inventario", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await inventarioService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Elemento de inventario no encontrado" });
        }
        res.status(200).json({ message: "Inventario actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar inventario", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await inventarioService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "Elemento de inventario no encontrado" });
        }
        res.status(200).json({ message: "Inventario eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar inventario", error });
    }
};