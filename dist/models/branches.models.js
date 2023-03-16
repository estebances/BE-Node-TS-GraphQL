"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branches = void 0;
const objection_1 = require("objection");
class Branches extends objection_1.Model {
    static get tableName() {
        return "branches";
    }
    ;
}
exports.Branches = Branches;
