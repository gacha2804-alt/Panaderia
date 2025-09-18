const tipodocService = require('../services/tipodoc.services');

exports.findAll = async (req, res) => {
    try {
        const tipodocs = await tipodocService.findAll();
        res.status(200).json(tipodocs);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
};

exports.findById = async (req, res) => {
    const IdTipoDoc = req.params.IdTipoDoc;
    if (!IdTipoDoc) {
        return res.status(400).json({ message: "Falta el parámetro IdTipoDoc" });
    }
    try {
        const tipodoc = await tipodocService.findById(IdTipoDoc);
        if (!tipodoc) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(tipodoc);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newtipodoc = await tipodocService.create(req.body);
        res.status(201).json(newtipodoc);
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario", error });
    }
};

exports.update = async (req, res) => {
    const IdTipoDoc = req.params.IdTipoDoc;
    if (!IdTipoDoc) {
        return res.status(400).json({ message: "Falta el parámetro IdTipoDoc" });
    }
    try {
        const updated = await tipodocService.update(IdTipoDoc, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario", error });
    }
};

exports.remove = async (req, res) => {
    const IdTipoDoc = req.params.IdTipoDoc;
    if (!IdTipoDoc) {
        return res.status(400).json({ message: "Falta el parámetro IdTipoDoc" });
    }
    try {
        const removed = await tipodocService.remove(IdTipoDoc);
        if (!removed) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario", error });
    }
};
