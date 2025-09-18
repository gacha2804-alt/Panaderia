const productosService = require('../services/productos.services');

exports.findAll = async (req, res) => {
    try {
        const productos = await productosService.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const productos = await productosService.findById(req.params.IdProducto);
        if (!productos) {
            return res.status(404).json({ message: "producto no encontrado" });
        }
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newproductos = await productosService.create(req.body);
        res.status(201).json(newproductos);
    } catch (error) {
        res.status(500).json({ message: "Error al crear productos", error });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await productosService.update(req.params.IdProducto, req.body);
        if (!updated) {
            return res.status(404).json({ message: "producto no encontrado" });
        }
        res.status(200).json({ message: "producto actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar producto", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await productosService.remove(req.params.IdProducto);
        if (!removed) {
            return res.status(404).json({ message: "producto no encontrado" });
        }
        res.status(200).json({ message: "producto eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto", error });
    }
};
