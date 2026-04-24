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

const crearProducto = (req, res) => {
    const nuevoProducto = req.body;

    productoService.crearProducto(nuevoProducto, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: "Error al crear producto" });
        } else {
            res.status(201).json(resultado);
        }
    });
};

module.exports = {
    obtenerProductos,
    crearProducto
};