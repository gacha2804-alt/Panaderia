const ventaEncabService = require('../services/ventaEncab.services');

exports.findAll = async (req, res) => {
    try {
        const data = await ventaEncabService.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

exports.findById = async (req, res) => {
    try {
        const data = await ventaEncabService.findById(req.params.IdVenta);
        if (!data) return res.status(404).json({ message: 'Registro no encontrado' });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

exports.create = async (req, res) => {
    try {
        const nuevo = await ventaEncabService.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

exports.update = async (req, res) => {
    try {
        const actualizado = await ventaEncabService.update(req.params.IdVenta, req.body);
        if (!actualizado) return res.status(404).json({ message: 'Registro no encontrado' });
        res.json({ message: 'Registro actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

exports.remove = async (req, res) => {
    try {
        const eliminado = await ventaEncabService.remove(req.params.IdVenta);
        if (!eliminado) return res.status(404).json({ message: 'Registro no encontrado' });
        res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
