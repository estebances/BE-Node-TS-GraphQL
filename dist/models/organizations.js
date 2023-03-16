"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
const objection_1 = require("objection");
class Organizations extends objection_1.Model {
    static get tableName() {
        return "organizations";
    }
    ;
}
exports.Organizations = Organizations;
