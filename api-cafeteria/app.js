const express = require("express");
const app = express();

const productoRoutes = require("./routes/productoRoutes");

app.use(express.json());

app.use("/api", productoRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
