"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_ctl_1 = require("../controllers/users.ctl");
const router = (0, express_1.Router)();
router.get('/all', users_ctl_1.getAllUsers);
exports.default = router;
