"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
exports.router = express_1.default.Router();
exports.router.route('/').get(user_1.findAll).post(user_1.save);
exports.router.route('/:id').get(user_1.findById).put(user_1.updateById).delete(user_1.deleteById);
