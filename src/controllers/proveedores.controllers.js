const proveedoresService = require('../services/proveedores.services');


exports.findAll = async (req, res) => {
    try {
        const proveedores = await proveedoresService.findAll();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proveedores', error });
    }
};

exports.findById = async (req, res) => {
    try {
        const proveedor = await proveedoresService.findById(req.params.IdProveedor);
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json(proveedor);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proveedor', error });
    }
};

exports.create = async (req, res) => {
    try {
        const nuevoProveedor = await proveedoresService.create(req.body);
        res.status(201).json(nuevoProveedor);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el proveedor', error });
    }
};

exports.update = async (req, res) => {
    try {
        const actualizado = await proveedoresService.update(req.params.IdProveedor, req.body);
        if (!actualizado) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json({ message: 'Proveedor actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proveedor', error });
    }
};

exports.remove = async (req, res) => {
    try {
        const eliminado = await proveedoresService.remove(req.params.IdProveedor);
        if (!eliminado) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json({ message: 'Proveedor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proveedor', error });
    }
};
