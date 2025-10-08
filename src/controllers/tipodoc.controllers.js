const TipoDocService = require('../services/tipodoc.services');
const tipoDocService = new TipoDocService();

class TipoDocController {
    //  PUBLICO
    async getAll(req, res) {
        try {
            const tipodocs = await tipoDocService.findAll();
            res.status(200).json(tipodocs);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los tipos de documento", error });
        }
    }

    async getById(req, res) {
        try {
            const IdTipoDoc = req.params.IdTipoDoc;
            if (!IdTipoDoc) {
                return res.status(400).json({ message: "Falta el parámetro IdTipoDoc" });
            }

            const tipodoc = await tipoDocService.findById(IdTipoDoc);
            if (!tipodoc) {
                return res.status(404).json({ message: "Tipo de documento no encontrado" });
            }

            res.status(200).json(tipodoc);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el tipo de documento", error });
        }
    }

    //  PRIVADO 
    async create(req, res) {
        try {
            const newTipoDoc = await tipoDocService.create(req.body);
            res.status(201).json(newTipoDoc);
        } catch (error) {
            res.status(500).json({ message: "Error al crear tipo de documento", error });
        }
    }

    async update(req, res) {
        try {
            const IdTipoDoc = req.params.IdTipoDoc;
            if (!IdTipoDoc) {
                return res.status(400).json({ message: "Falta el parámetro IdTipoDoc" });
            }

            const updated = await tipoDocService.update(IdTipoDoc, req.body);
            if (!updated) {
                return res.status(404).json({ message: "Tipo de documento no encontrado" });
            }

            res.status(200).json({ message: "Tipo de documento actualizado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar tipo de documento", error });
        }
    }

    async delete(req, res) {
        try {
            const IdTipoDoc = req.params.IdTipoDoc;
            if (!IdTipoDoc) {
                return res.status(400).json({ message: "Falta el parámetro IdTipoDoc" });
            }

            const removed = await tipoDocService.remove(IdTipoDoc);
            if (!removed) {
                return res.status(404).json({ message: "Tipo de documento no encontrado" });
            }

            res.status(200).json({ message: "Tipo de documento eliminado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar tipo de documento", error });
        }
    }
}

module.exports = new TipoDocController();
