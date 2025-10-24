const metodoPagoServices = require('../services/metodopago.services');

exports.findAll = async (req, res) => {
    try {
        const metodosPago = await metodoPagoServices.findAll();
        res.status(200).json(metodosPago);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener métodos de pago", error });
    }
};

exports.findById = async (req, res) => {
    const IdMetodoPago = req.params.IdMetodoPago;
    if (!IdMetodoPago) {
        return res.status(400).json({ message: "Falta el parámetro IdMetodoPago" });
    }
    try {
        const metodoPago = await metodoPagoServices.findById(IdMetodoPago);
        if (!metodoPago) {
            return res.status(404).json({ message: "Método de pago no encontrado" });
        }
        res.status(200).json(metodoPago);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el método de pago", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newMetodoPago = await metodoPagoServices.create(req.body);
        res.status(201).json(newMetodoPago);
    } catch (error) {
        res.status(500).json({ message: "Error al crear método de pago", error });
    }
};

exports.update = async (req, res) => {
    const IdMetodoPago = req.params.IdMetodoPago;
    if (!IdMetodoPago) {
        return res.status(400).json({ message: "Falta el parámetro IdMetodoPago" });
    }
    try {
        const updated = await metodoPagoServices.update(IdMetodoPago, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Método de pago no encontrado" });
        }
        res.status(200).json({ message: "Método de pago actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar método de pago", error });
    }
};

exports.remove = async (req, res) => {
    const IdMetodoPago = req.params.IdMetodoPago;
    if (!IdMetodoPago) {
        return res.status(400).json({ message: "Falta el parámetro IdMetodoPago" });
    }
    try {
        const removed = await metodoPagoServices.remove(IdMetodoPago);
        if (!removed) {
            return res.status(404).json({ message: "Método de pago no encontrado" });
        }
        res.status(200).json({ message: "Método de pago eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar método de pago", error });
    }
};
