import mongoose, { Schema, Document } from "mongoose";

// Definir la estructura del documento en TypeScript
export interface IFilm extends Document {
    title: string;
    director: string;
    releasedDate: Date;
}

// Esquema de Mongoose
const FilmSchema: Schema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    releasedDate: { type: Date, required: true },
});

// Crear el modelo de Mongoose
export const Film = mongoose.model<IFilm>("Film", FilmSchema);
