const metodopagoService = require('../services/metodopago.services');

exports.findAll = async (req, res) => {
  try {
    const metodopagos = await metodopagoService.findAll();
    res.status(200).json(metodopagos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener métodos de pago", error });
  }
};

exports.findById = async (req, res) => {
  const { IdMetodoPago } = req.params;
  if (!IdMetodoPago) {
    return res.status(400).json({ message: "Falta el parámetro IdMetodoPago" });
  }
  try {
    const metodopago = await metodopagoService.findById(IdMetodoPago);
    if (!metodopago) {
      return res.status(404).json({ message: "Método de pago no encontrado" });
    }
    res.status(200).json(metodopago);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el método de pago", error });
  }
};

exports.create = async (req, res) => {
  try {
    const newMetodoPago = await metodopagoService.create(req.body);
    res.status(201).json(newMetodoPago);
  } catch (error) {
    res.status(500).json({ message: "Error al crear método de pago", error });
  }
};

exports.update = async (req, res) => {
  const { IdMetodoPago } = req.params;
  try {
    const updated = await metodopagoService.update(IdMetodoPago, req.body);
    if (!updated) {
      return res.status(404).json({ message: "Método de pago no encontrado" });
    }
    res.status(200).json({ message: "Método de pago actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar método de pago", error });
  }
};

exports.remove = async (req, res) => {
  const { IdMetodoPago } = req.params;
  try {
    const removed = await metodopagoService.remove(IdMetodoPago);
    if (!removed) {
      return res.status(404).json({ message: "Método de pago no encontrado" });
    }
    res.status(200).json({ message: "Método de pago eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar método de pago", error });
  }
};
