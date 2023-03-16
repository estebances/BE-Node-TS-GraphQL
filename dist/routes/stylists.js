"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stylists_controllers_1 = require("../controllers/stylists.controllers");
const router = (0, express_1.Router)();
router.get("/", stylists_controllers_1.getStylists);
exports.default = router;
