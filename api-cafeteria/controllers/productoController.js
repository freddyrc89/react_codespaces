const productoService = require("../services/productoService");

const obtenerProductos = (req, res) => {
    productoService.listarProductos((err, productos) => {
        if (err) {
            res.status(500).json({ error: "Error del servidor" });
        } else {
            res.json(productos);
        }
    });
};

module.exports = {
    obtenerProductos
};