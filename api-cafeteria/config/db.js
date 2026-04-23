const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "80.241.217.53",
    user: "desarrollador", // aquí debes poner el usuario para conectarse a MySQL
    password: "SENATI", // y aquí la contraseña.
    database: "cafeteria" //nombre de la base de datos.
});

connection.connect((err) => {
    if (err) {
        console.log("Error de conexión:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});
module.exports = connection;