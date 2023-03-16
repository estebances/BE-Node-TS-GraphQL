import {getAllRecipes} from "../services/recipes.services"; //get all of the available data from our database.

const Resolvers = {
    Query: {        
        getAllRecipes: async () => await getAllRecipes(), //if the user runs the recipes command
        //if the user runs the getRecipe command:
        getRecipe: async (_: any, args: any) => { 
            console.log(args);
            const recipes = await getAllRecipes()
            //get the object that contains the specified ID.
            return recipes.find((recipe) => recipe.id === args.id);
        },
    },
};
export default Resolvers;