"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const lecturer_1 = require("../controllers/lecturer");
const imageUpload_1 = require("../middlewares/imageUpload");
exports.router = express_1.default.Router();
exports.router.route('/').get(lecturer_1.findAll).post(imageUpload_1.upload.single('image'), lecturer_1.save);
exports.router.route('/:id').get(lecturer_1.findById).delete(lecturer_1.deleteById).put(imageUpload_1.upload.single('image'), lecturer_1.updateById);
