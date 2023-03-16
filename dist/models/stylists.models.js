"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stylists = void 0;
const objection_1 = require("objection");
class Stylists extends objection_1.Model {
    static get tableName() {
        return "stylists";
    }
    ;
}
exports.Stylists = Stylists;
