import { gql } from "apollo-server-express"; //will create a schema

const Schema = gql`
    type Recipe {
        MyUnknownColumn: Int
        recipe_name: String
        prep_time: String
        cook_time: String
        total_time: String
        servings: Int
        yield: String
        ingredients: String
        directions: String
        rating: Float
        url: String
        cuisine_path: String
        nutrition: String
        timing: String
        img_src: String
    }
    #handle user commands
    type Query {
        getAllRecipes: [Recipe] 
        getRecipe(id: Int): Recipe 
    }`;

export default Schema; 