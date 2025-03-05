"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const lecture_1 = require("../controllers/lecture");
const imageUpload_1 = require("../middlewares/imageUpload");
exports.router = express_1.default.Router();
exports.router.route('/').get(lecture_1.findAll).post(imageUpload_1.upload.single('image'), lecture_1.save);
exports.router.route('/:id').get(lecture_1.findById).delete(lecture_1.deleteById).put(imageUpload_1.upload.single('image'), lecture_1.updateById);
// router.route('/:lecturerName').get(findByLecturerName);
