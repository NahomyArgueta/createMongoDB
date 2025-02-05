import { Request, Response, NextFunction } from "express";
import { createFilm } from "../services/film.service";

export const createFilmController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { title, director, releasedDate } = req.body;

        if (!title || !director || !releasedDate) {
            res.status(400).json({ message: "Todos los campos son obligatorios" });
            return;
        }

        const newFilm = await createFilm({ title, director, releasedDate } as any);
        res.status(201).json(newFilm);
    } catch (error) {
        next(error);
    }
};