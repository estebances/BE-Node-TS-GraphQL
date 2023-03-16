"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app_1 = __importDefault(require("./config/app"));
const middlewares_1 = __importDefault(require("./middlewares"));
const database_1 = __importDefault(require("./config/database"));
const { api, port } = app_1.default;
const base = api.path;
const app = (0, express_1.default)();
const router = (0, routes_1.default)();
(0, database_1.default)();
app.use(base, middlewares_1.default);
app.use(base, router);
app.listen(port);
console.log(`Access your app now on http://localhost:${port}`);
// this route can be removed
app.get("/", (req, res) => res.send("Organizations services is live"));
exports.default = app;
