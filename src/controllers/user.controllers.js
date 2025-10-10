const UserServices = require('../services/user.services');
const userServices = new UserServices();

class UserController {
    async getPublicProfile(req, res) {
        try {
            const userId = req.params.id;
            const profile = await userServices.getPublicProfile(userId);

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
            const profile = await userServices.getProfile(req.user.id);
            res.json(profile);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const updatedUser = await userServices.update(req.user.id, req.body);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            await userServices.delete(req.user.id);
            res.json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async changePassword(req, res) {
        try {
            const { oldPassword, newPassword } = req.body;
            await userServices.changePassword(req.user.id, oldPassword, newPassword);
            res.json({ message: 'Contraseña actualizada correctamente' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getDashboard(req, res) {
        try {
            const dashboard = await userServices.getDashboard(req.user.id);
            res.json(dashboard);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();
