const productosServices = require('../services/productos.services');

exports.findAll = async (req, res) => {
    try {
        const productos = await productosServices.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};

exports.findById = async (req, res) => {
    const IdProducto = req.params.IdProducto;
    if (!IdProducto) {
        return res.status(400).json({ message: "Falta el parámetro IdProducto" });
    }
    try {
        const producto = await productosServices.findById(IdProducto);
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newProducto = await productosServices.create(req.body);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: "Error al crear producto", error });
    }
};

exports.update = async (req, res) => {
    const IdProducto = req.params.IdProducto;
    if (!IdProducto) {
        return res.status(400).json({ message: "Falta el parámetro IdProducto" });
    }
    try {
        const updated = await productosServices.update(IdProducto, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar producto", error });
    }
};

exports.remove = async (req, res) => {
    const IdProducto = req.params.IdProducto;
    if (!IdProducto) {
        return res.status(400).json({ message: "Falta el parámetro IdProducto" });
    }
    try {
        const removed = await productosServices.remove(IdProducto);
        if (!removed) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto", error });
    }
};
