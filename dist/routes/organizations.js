"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizations_controllers_1 = require("../controllers/organizations.controllers");
const router = (0, express_1.Router)();
router.get("/", organizations_controllers_1.getOrganizations);
exports.default = router;
