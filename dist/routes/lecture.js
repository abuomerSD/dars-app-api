"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const lecture_1 = require("../controllers/lecture");
const imageUpload_1 = require("../middlewares/imageUpload");
const adminAuth_1 = require("../middlewares/adminAuth");
exports.router = express_1.default.Router();
exports.router.route('/').get(lecture_1.findAll).post(adminAuth_1.adminAuth, imageUpload_1.upload.single('image'), lecture_1.save);
exports.router.route('/:id').get(lecture_1.findById).delete(adminAuth_1.adminAuth, lecture_1.deleteById).put(adminAuth_1.adminAuth, imageUpload_1.upload.single('image'), lecture_1.updateById);
exports.router.route('/send-notification-to-all').post(adminAuth_1.adminAuth, lecture_1.sendNotificationToAll);
