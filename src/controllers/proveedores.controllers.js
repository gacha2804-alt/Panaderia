const proveedoresServices = require('../services/proveedores.services');

exports.findAll = async (req, res) => {
    try {
        const proveedores = await proveedoresServices.findAll();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener proveedores", error });
    }
};

exports.findById = async (req, res) => {
    const IdProveedor = req.params.IdProveedor;
    if (!IdProveedor) {
        return res.status(400).json({ message: "Falta el parámetro IdProveedor" });
    }
    try {
        const proveedor = await proveedoresServices.findById(IdProveedor);
        if (!proveedor) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }
        res.status(200).json(proveedor);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el proveedor", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newProveedor = await proveedoresServices.create(req.body);
        res.status(201).json(newProveedor);
    } catch (error) {
        res.status(500).json({ message: "Error al crear proveedor", error });
    }
};

exports.update = async (req, res) => {
    const IdProveedor = req.params.IdProveedor;
    if (!IdProveedor) {
        return res.status(400).json({ message: "Falta el parámetro IdProveedor" });
    }
    try {
        const updated = await proveedoresServices.update(IdProveedor, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }
        res.status(200).json({ message: "Proveedor actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar proveedor", error });
    }
};

exports.remove = async (req, res) => {
    const IdProveedor = req.params.IdProveedor;
    if (!IdProveedor) {
        return res.status(400).json({ message: "Falta el parámetro IdProveedor" });
    }
    try {
        const removed = await proveedoresServices.remove(IdProveedor);
        if (!removed) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }
        res.status(200).json({ message: "Proveedor eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar proveedor", error });
    }
};
