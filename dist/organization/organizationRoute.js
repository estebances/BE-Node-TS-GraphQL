"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = require("./organizationsController");
const router = express_1.Router();
router.get("/", controller.getOrganizations);
exports.default = router;
