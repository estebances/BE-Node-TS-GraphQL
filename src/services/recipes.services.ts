import { Recipes } from "../models/recipes.models";

const getAllRecipes = async () => {
    try {
        const response = await Recipes.query();
        return response;
    } catch (error) {
        return error;
    }
}

export { getAllRecipes };