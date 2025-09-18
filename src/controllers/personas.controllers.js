const personasService = require('../services/personas.services');

exports.findAll = async (req, res) => {
    try {
        const personas = await personasService.findAll();
        res.status(200).json(personas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener personas", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const persona = await personasService.findById(req.params.IdPersona);
        if (!persona) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }
        res.status(200).json(persona);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener persona", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newPersona = await personasService.create(req.body);
        res.status(201).json(newPersona);
    } catch (error) {
        res.status(500).json({ message: "Error al crear persona", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await personasService.update(req.params.IdPersona, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }
        res.status(200).json({ message: "Persona actualizada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar persona", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await personasService.remove(req.params.IdPersona);
        if (!deleted) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }
        res.status(200).json({ message: "Persona eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar persona", error });
    }
};
