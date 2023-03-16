import { Router } from "express";
import { getRecipes }  from "../controllers/recipes.controllers";

const router = Router();

router.get("/", getRecipes);

export default router;