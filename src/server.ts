import express from "express";
import { connectDB } from "./config/db";


const app = express();
const PORT = process.env.PORT || 3000;

import dotenv from "dotenv";
dotenv.config();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica de prueba
app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
