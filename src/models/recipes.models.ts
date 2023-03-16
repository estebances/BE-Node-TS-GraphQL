import { Model } from "objection";

export class Recipes extends Model {
  static get tableName() {
    return "recipes";
  };
}
