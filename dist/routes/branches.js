"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const branches_controllers_1 = require("../controllers/branches.controllers");
const router = (0, express_1.Router)();
router.get("/", branches_controllers_1.getBranches);
exports.default = router;
