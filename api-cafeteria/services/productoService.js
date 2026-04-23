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
module.exports = {
    listarProductos
};
