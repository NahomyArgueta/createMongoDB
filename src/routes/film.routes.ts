import { Router } from "express";
import { createFilmController } from "../controllers/film.controller";

const router: Router = Router();

router.post("/", createFilmController);

export default router;