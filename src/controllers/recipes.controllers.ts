import { Request, Response } from "express";
import { getAllRecipes } from "../services/recipes.services";

const getRecipes = async (req: Request, res: Response) => {
    try {
        const response = await getAllRecipes();
        res.send(response);
    } catch (error) {
        res.status(500);
        res.send({ error });
    }
}

export { getRecipes };