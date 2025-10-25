const inventarioService = require('../services/inventario.services');

class InventarioController {
    //  PÚBLICO
    async findAll(req, res) {
        try {
            const inventario = await inventarioService.findAll();
            res.status(200).json(inventario);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener inventario", error });
        }
    }

    async findById(req, res) {
        const IdInventario = req.params.IdInventario;
        if (!IdInventario) {
            return res.status(400).json({ message: "Falta el parámetro IdInventario" });
        }

        try {
            const inventario = await inventarioService.findById(IdInventario);
            if (!inventario) {
                return res.status(404).json({ message: "Elemento de inventario no encontrado" });
            }
            res.status(200).json(inventario);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el inventario", error });
        }
    }

    //  PRIVADO
    async create(req, res) {
        try {
            const newInventario = await inventarioService.create(req.body);
            res.status(201).json(newInventario);
        } catch (error) {
            res.status(500).json({ message: "Error al crear inventario", error });
        }
    }

    async update(req, res) {
        try {
            const updatedinventario = await inventarioService.update(req.params.IdInventario, req.body);
            if (!updatedinventario) {
                return res.status(404).json({ message: "Elemento de inventario no encontrado" });
            }
            res.status(200).json({ message: "Inventario actualizado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar inventario", error });
        }
    }

    async remove(req, res) {
        try {
            const removed = await inventarioService.remove(req.params.IdInventario);
            if (!removed) {
                return res.status(404).json({ message: "Elemento de inventario no encontrado" });
            }
            res.status(200).json({ message: "Inventario eliminado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar inventario", error });
        }
    }
}

module.exports = new InventarioController();
