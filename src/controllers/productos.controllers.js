const productosServices = require('../services/productos.services');

// Obtener todos los productos
exports.findAll = async (req, res) => {
    try {
        const productos = await productosServices.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};

// Obtener un producto por ID
exports.findById = async (req, res) => {
    const IdProducto = req.params.id;
    try {
        const producto = await productosServices.findById(IdProducto);
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto", error });
    }
};

// Crear producto
exports.create = async (req, res) => {
    try {
        const newProducto = await productosServices.create(req.body);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: "Error al crear producto", error });
    }
};

// Actualizar producto
exports.update = async (req, res) => {
    const IdProducto = req.params.id;
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

// Eliminar producto
exports.remove = async (req, res) => {
    const IdProducto = req.params.id;
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
