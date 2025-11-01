const personasServices = require('../services/personas.services');


exports.findAll = async (req, res) => {
    try {
        const personas = await personasServices.findAll();
        res.status(200).json(personas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener personas", error });
    }
};

//  Obtener una persona por su ID
exports.findById = async (req, res) => {
    const IdPersona = req.params.id; 
    if (!IdPersona) {
        return res.status(400).json({ message: "Falta el parámetro IdPersona" });
    }
    try {
        const persona = await personasServices.findById(IdPersona);
        if (!persona) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }
        res.status(200).json(persona);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la persona", error });
    }
};

//  Crear una nueva persona
exports.create = async (req, res) => {
    try {
        const newPersona = await personasServices.create(req.body);
        res.status(201).json(newPersona);
    } catch (error) {
        res.status(500).json({ message: "Error al crear persona", error });
    }
};

//  Actualizar una persona
exports.update = async (req, res) => {
    const IdPersona = req.params.id;
    if (!IdPersona) {
        return res.status(400).json({ message: "Falta el parámetro IdPersona" });
    }
    try {
        const updated = await personasServices.update(IdPersona, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }
        res.status(200).json({ message: "Persona actualizada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar persona", error });
    }
};

// ✅ Eliminar una persona
exports.remove = async (req, res) => {
    const IdPersona = req.params.id;
    if (!IdPersona) {
        return res.status(400).json({ message: "Falta el parámetro IdPersona" });
    }
    try {
        const removed = await personasServices.remove(IdPersona);
        if (!removed) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }
        res.status(200).json({ message: "Persona eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar persona", error });
    }
};

//  Perfil público (por ID)
exports.getPublicProfile = async (req, res) => {
    const IdPersona = req.params.id;
    res.status(200).json({ message: `Perfil público de la persona ${IdPersona}` });
};

//  Perfil del usuario autenticado
exports.getProfile = async (req, res) => {
    res.status(200).json({ message: "Perfil privado del usuario autenticado" });
};

//  Eliminar perfil (usuario autenticado)
exports.delete = async (req, res) => {
    res.status(200).json({ message: "Perfil del usuario eliminado correctamente" });
};

// Dashboard 
exports.getDashboard = async (req, res) => {
    res.status(200).json({ message: "Dashboard de la persona autenticada" });
};

//  Cambiar contraseña 
exports.changePassword = async (req, res) => {
    res.status(200).json({ message: "Contraseña cambiada correctamente" });
};
