const inventarioServices = require('../services/inventario.services');

exports.findAll = async (req, res) => {
    try {
        const inventario = await inventarioServices.findAll();
        res.status(200).json(inventario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener inventario", error });
    }
};

exports.findById = async (req, res) => {
    const IdInventario = req.params.IdInventario;
    if (!IdInventario) {
        return res.status(400).json({ message: "Falta el parámetro IdInventario" });
    }
    try {
        const item = await inventarioServices.findById(IdInventario);
        if (!item) {
            return res.status(404).json({ message: "Inventario no encontrado" });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el inventario", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newItem = await inventarioServices.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error al crear inventario", error });
    }
};

exports.update = async (req, res) => {
    const IdInventario = req.params.IdInventario;
    if (!IdInventario) {
        return res.status(400).json({ message: "Falta el parámetro IdInventario" });
    }
    try {
        const updated = await inventarioServices.update(IdInventario, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Inventario no encontrado" });
        }
        res.status(200).json({ message: "Inventario actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar inventario", error });
    }
};

exports.remove = async (req, res) => {
    const IdInventario = req.params.IdInventario;
    if (!IdInventario) {
        return res.status(400).json({ message: "Falta el parámetro IdInventario" });
    }
    try {
        const removed = await inventarioServices.remove(IdInventario);
        if (!removed) {
            return res.status(404).json({ message: "Inventario no encontrado" });
        }
        res.status(200).json({ message: "Inventario eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar inventario", error });
    }
};
