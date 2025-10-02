const metodopagoService = require('../services/metodopago.service');
const metodopagoService = new metodopagoService();

class metodopagoController {
    async getPublicProfile(req, res) {
        try {
            const metodopagoId = req.params.id;
            const profile = await metodopagoService.getPublicProfile(metodopagoId);
            
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
            const profile = await metodopagoService.getProfile(req.metodopago.id);
            res.json(profile);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const updatedmetodopago = await metodopagoService.update(req.metodopago.id, req.body);
            res.json(updatedmetodopago);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            await metodopagoService.delete(req.metodopago.id);
            res.json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async changePassword(req, res) {
        try {
            const { oldPassword, newPassword } = req.body;
            await metodopagoService.changePassword(req.metodopago.id, oldPassword, newPassword);
            res.json({ message: 'Contraseña actualizada correctamente' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getDashboard(req, res) {
        try {
            const dashboard = await metodopagoService.getDashboard(req.metodopago.id);
            res.json(dashboard);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new metodopagoController();