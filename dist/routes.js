"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = [
    "organizations",
    "branches",
    "services",
    "stylists",
];
function defineRoutes() {
    const router = (0, express_1.Router)();
    routes.forEach(name => {
        const route = require(`./routes/${name}`).default;
        router.use(`/${name}`, route);
    });
    return router;
}
exports.default = defineRoutes;
;
