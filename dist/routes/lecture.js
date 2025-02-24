"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const lecture_1 = require("../controllers/lecture");
exports.router = express_1.default.Router();
exports.router.route('/').get(lecture_1.findAll).post(lecture_1.save);
exports.router.route('/:id').get(lecture_1.findById).delete(lecture_1.deleteById);
exports.router.route('/:lecturerName').get(lecture_1.findByLecturerName);
