import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mongo-crud-demo";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("🔗 Conectado a MongoDB");
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error);
        process.exit(1);
    }
};
