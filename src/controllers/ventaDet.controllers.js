const ventaDetService = require('../services/ventaDet.services');

exports.findAll = async (req, res) => {
    try {
        const data = await ventaDetService.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los registros', error });
    }
};

exports.findById = async (req, res) => {
    try {
        const data = await ventaDetService.findById(req.params.IdVentaD);
        if (!data) return res.status(404).json({ message: 'Registro no encontrado' });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el registro', error });
    }
};

exports.create = async (req, res) => {
    try {
        const nuevo = await ventaDetService.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el registro', error });
    }
};

exports.update = async (req, res) => {
    try {
        const actualizado = await ventaDetService.update(req.params.IdVentaD, req.body);
        if (!actualizado) return res.status(404).json({ message: 'Registro no encontrado' });
        res.json({ message: 'Registro actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

exports.remove = async (req, res) => {
    try {
        const eliminado = await ventaDetService.remove(req.params.IdVentaD);
        if (!eliminado) return res.status(404).json({ message: 'Registro no encontrado' });
        res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
