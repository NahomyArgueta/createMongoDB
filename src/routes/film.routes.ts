import { Router, Request, Response, NextFunction } from "express";
import { createFilm } from "../services/film.service";

const router: Router = Router(); // Definir el router con su tipo explícito

// Ruta para insertar una nueva película
router.post("/", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
});

export default router;
