const productoRepository = require("../repositories/productoRepository");

const listarProductos = (callback) => {
    productoRepository.obtenerProductos((err, productos) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, productos);
        }
    });
};

const crearProducto = (producto, callback) => {
    productoRepository.crearProducto(producto, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                mensaje: "Producto creado correctamente",
                id: resultado.insertId
            });
        }
    });
};
module.exports = {
    listarProductos,
    crearProducto
};
