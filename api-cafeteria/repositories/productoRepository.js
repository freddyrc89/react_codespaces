const db = require("../config/db");

const obtenerProductos = (callback) => {
    const sql = "SELECT * FROM productos";

    db.query(sql, (err, resultados) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultados);
        }
    });
};
module.exports = {
    obtenerProductos
};


console.log(db);