import { Film, IFilm } from "../models/film.model";

// Función para insertar una nueva película
export const createFilm = async (filmData: IFilm): Promise<IFilm> => {
    try {
        const newFilm = new Film(filmData);
        await newFilm.save();
        return newFilm;
    } catch (error) {
        throw new Error(`Error al insertar la película: ${error}`);
    }
};
