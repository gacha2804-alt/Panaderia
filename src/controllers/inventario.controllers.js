const inventarioService = require('../services/inventario.service');
const inventarioService = new inventarioService();

class inventarioController {
    async getPublicProfile(req, res) {
        try {
            const inventarioId = req.params.id;
            const profile = await inventarioService.getPublicProfile(inventarioId);
            
            if (!profile) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            
            res.json(profile);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getProfile(req, res) {
        try {
            const profile = await inventarioService.getProfile(req.inventario.id);
            res.json(profile);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const updatedinventario = await inventarioService.update(req.inventario.id, req.body);
            res.json(updatedinventario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            await inventarioService.delete(req.inventario.id);
            res.json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async changePassword(req, res) {
        try {
            const { oldPassword, newPassword } = req.body;
            await inventarioService.changePassword(req.inventario.id, oldPassword, newPassword);
            res.json({ message: 'Contraseña actualizada correctamente' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getDashboard(req, res) {
        try {
            const dashboard = await inventarioService.getDashboard(req.inventario.id);
            res.json(dashboard);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new inventarioController();