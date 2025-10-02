const empleadosService = require('../services/empleados.service');
const empleadosService = new empleadosService();

class empleadosController {
    async getPublicProfile(req, res) {
        try {
            const empleadosId = req.params.id;
            const profile = await empleadosService.getPublicProfile(empleadosId);
            
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
            const profile = await empleadosService.getProfile(req.empleados.id);
            res.json(profile);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const updatedempleados = await empleadosService.update(req.empleados.id, req.body);
            res.json(updatedempleados);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            await empleadosService.delete(req.empleados.id);
            res.json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async changePassword(req, res) {
        try {
            const { oldPassword, newPassword } = req.body;
            await empleadosService.changePassword(req.empleados.id, oldPassword, newPassword);
            res.json({ message: 'Contraseña actualizada correctamente' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getDashboard(req, res) {
        try {
            const dashboard = await empleadosService.getDashboard(req.empleados.id);
            res.json(dashboard);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new empleadosController();