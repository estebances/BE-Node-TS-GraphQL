"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_controllers_1 = require("../controllers/services.controllers");
const router = (0, express_1.Router)();
router.get("/", services_controllers_1.getServices);
exports.default = router;
