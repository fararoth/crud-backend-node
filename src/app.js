const cors = require("cors");
const express = require("express");
const app = express();

//settings
app.set("port", process.env.PORT || 5000); //si existe un valor de puerto en una variable de entorno la usamos, si no al puerto 4000, esto es porque los servidores en la nube usan las variables de entorno para darte el puerto.

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
