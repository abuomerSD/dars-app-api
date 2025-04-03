"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const adminAuth_1 = require("../middlewares/adminAuth");
exports.router = express_1.default.Router();
exports.router.route('/').get(adminAuth_1.adminAuth, user_1.findAll).post(adminAuth_1.adminAuth, user_1.save);
exports.router.route('/login').post(user_1.login);
exports.router.route('/:id').get(adminAuth_1.adminAuth, user_1.findById).put(adminAuth_1.adminAuth, user_1.updateById).delete(adminAuth_1.adminAuth, user_1.deleteById);
