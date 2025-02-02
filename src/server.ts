import express from "express";
import { connectDB } from "./config/db";
import filmRoutes from "./routes/film.routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB Atlas
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Usar rutas
app.use("/films", filmRoutes);

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
