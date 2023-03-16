"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const objection_1 = require("objection");
class Services extends objection_1.Model {
    static get tableName() {
        return "services";
    }
    ;
}
exports.Services = Services;
