const empleadosService = require('../services/empleados.services');


exports.findAll = async (req, res) => {
  try {
    const empleados = await empleadosService.findAll();
    res.status(200).json({
      acceso: "público",
      total: empleados.length,
      data: empleados
    });
  } catch (error) {
    res.status(500).json({
      acceso: "público",
      message: "Error al obtener empleados",
      error
    });
  }
};

exports.findById = async (req, res) => {
  const IdEmpleado = req.params.IdEmpleado;
  if (!IdEmpleado) {
    return res.status(400).json({ acceso: "público", message: "Falta el parámetro IdEmpleado" });
  }
  try {
    const empleado = await empleadosService.findById(IdEmpleado);
    if (!empleado) {
      return res.status(404).json({ acceso: "público", message: "Empleado no encontrado" });
    }
    res.status(200).json({
      acceso: "público",
      data: empleado
    });
  } catch (error) {
    res.status(500).json({
      acceso: "público",
      message: "Error al obtener el empleado",
      error
    });
  }
};


exports.create = async (req, res) => {
  try {
    const newEmpleado = await empleadosService.create(req.body);
    res.status(201).json({
      acceso: "privado",
      message: "Empleado creado exitosamente",
      data: newEmpleado
    });
  } catch (error) {
    res.status(500).json({
      acceso: "privado",
      message: "Error al crear empleado",
      error
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedEmpleado = await empleadosService.update(req.params.IdEmpleado, req.body);
    if (!updatedEmpleado) {
      return res.status(404).json({ acceso: "privado", message: "Empleado no encontrado" });
    }
    res.status(200).json({
      acceso: "privado",
      message: "Empleado actualizado exitosamente"
    });
  } catch (error) {
    res.status(500).json({
      acceso: "privado",
      message: "Error al actualizar empleado",
      error
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const removed = await empleadosService.remove(req.params.IdEmpleado);
    if (!removed) {
      return res.status(404).json({ acceso: "privado", message: "Empleado no encontrado" });
    }
    res.status(200).json({
      acceso: "privado",
      message: "Empleado eliminado exitosamente"
    });
  } catch (error) {
    res.status(500).json({
      acceso: "privado",
      message: "Error al eliminar empleado",
      error
    });
  }
};
