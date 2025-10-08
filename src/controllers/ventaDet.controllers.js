const VentaDetService = require('../services/ventaDet.services');
const ventaDetService = new VentaDetService();

class VentaDetController {
    // PUBLICOS 
    async findAll(req, res) {
        try {
            const ventaDets = await ventaDetService.findAll();
            res.status(200).json(ventaDets);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los detalles de venta", error });
        }
    }

    async findById(req, res) {
        try {
            const { IdVentaD } = req.params;
            const ventaDet = await ventaDetService.findById(IdVentaD);

            if (!ventaDet) {
                return res.status(404).json({ message: "Detalle de venta no encontrado" });
            }

            res.status(200).json(ventaDet);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el detalle de venta", error });
        }
    }

    // PRIVADO
    async create(req, res) {
        try {
            const newVentaDet = await ventaDetService.create(req.body);
            res.status(201).json(newVentaDet);
        } catch (error) {
            res.status(500).json({ message: "Error al crear detalle de venta", error });
        }
    }

    async update(req, res) {
        try {
            const { IdVentaD } = req.params;
            const updated = await ventaDetService.update(IdVentaD, req.body);

            if (!updated) {
                return res.status(404).json({ message: "Detalle de venta no encontrado" });
            }

            res.status(200).json({ message: "Detalle de venta actualizado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar detalle de venta", error });
        }
    }

    async delete(req, res) {
        try {
            const { IdVentaD } = req.params;
            const removed = await ventaDetService.delete(IdVentaD);

            if (!removed) {
                return res.status(404).json({ message: "Detalle de venta no encontrado" });
            }

            res.status(200).json({ message: "Detalle de venta eliminado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar detalle de venta", error });
        }
    }
}

module.exports = new VentaDetController();
