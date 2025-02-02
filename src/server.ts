import express from "express";
import { connectDB } from "./config/db";

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB Atlas
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
