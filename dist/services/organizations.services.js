"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrganizations = void 0;
const organizations_models_1 = require("../models/organizations.models");
const getAllOrganizations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield organizations_models_1.Organizations.query();
        return response;
    }
    catch (error) {
        return error;
    }
});
exports.getAllOrganizations = getAllOrganizations;
