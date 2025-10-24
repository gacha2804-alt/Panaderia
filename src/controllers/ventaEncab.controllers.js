const ventaEncabService = require('../services/ventaEncab.services');

class VentaEncabController {
    // PUBLICAS
    async findAll(req, res) {
        try {
            const ventaEncabs = await ventaEncabService.findAll();
            res.status(200).json(ventaEncabs);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener ventaEncab", error });
        }
    }

    
    async findById(req, res) {
        const IdVenta = req.params.IdVenta;
        if (!IdVenta) {
            return res.status(400).json({ message: "Falta el parámetro IdVenta" });
        }
        try {
            const ventaEncab = await ventaEncabService.findById(IdVenta);
            if (!ventaEncab) {
                return res.status(404).json({ message: "ventaEncab no encontrado" });
            }
            res.status(200).json(ventaEncab);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener ventaEncab", error });
        }
    }

    // PRIVADAS
    async create(req, res) {
        try {
            const newVentaEncab = await ventaEncabService.create(req.body);
            res.status(201).json(newVentaEncab);
        } catch (error) {
            res.status(500).json({ message: "Error al crear ventaEncab", error });
        }
    }

    
    async update(req, res) {
        const IdVenta = req.params.IdVenta;
        try {
            const updated = await ventaEncabService.update(IdVenta, req.body);
            if (!updated) {
                return res.status(404).json({ message: "ventaEncab no encontrado" });
            }
            res.status(200).json({ message: "ventaEncab actualizado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar ventaEncab", error });
        }
    }

    
    async remove(req, res) {
        const IdVenta = req.params.IdVenta;
        try {
            const removed = await ventaEncabService.remove(IdVenta);
            if (!removed) {
                return res.status(404).json({ message: "ventaEncab no encontrado" });
            }
            res.status(200).json({ message: "ventaEncab eliminado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar ventaEncab", error });
        }
    }
}

module.exports = new VentaEncabController();
