"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const knexfile_1 = __importDefault(require("../../knexfile"));
function database() {
    const knex = (0, knex_1.default)(knexfile_1.default);
    objection_1.Model.knex(knex);
}
exports.default = database;
;
