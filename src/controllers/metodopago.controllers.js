const metodopagoService = require('../services/metodopago.services'); 

exports.findAll = async (req, res) => {
    try {
        const metodopagos = await metodopagoService.findAll();
        res.status(200).json(metodopagos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener metodopago", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const metodopago = await metodopagoService.findById(req.params.id);
        if (!metodopago) {
            return res.status(404).json({ message: "metodopago no encontrado" });
        }
        res.status(200).json(metodopago);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el metodopago", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newmetodopago = await metodopagoService.create(req.body);
        res.status(201).json(newmetodopago);
    } catch (error) {
        res.status(500).json({ message: "Error al crear metodopago", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await metodopagoService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "metodopago no encontrado" });
        }
        res.status(200).json({ message: "metodopago actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar metodopago", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await metodopagoService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "metodopago no encontrado" });
        }
        res.status(200).json({ message: "metodopago eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar metodopago", error });
    }
};