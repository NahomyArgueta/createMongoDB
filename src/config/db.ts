import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables del .env

const MONGO_URI = process.env.DB_URL || "";

if (!MONGO_URI) {
    throw new Error("No se encontró la variable DB_URL en el archivo .env");
}

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};
