"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images');
    },
    filename: function (req, file, cb) {
        const fileExtenstion = file.mimetype.split('/')[1];
        const fileName = `image-${Date.now()}.${fileExtenstion}`;
        cb(null, fileName);
    }
});
exports.upload = (0, multer_1.default)({ storage: storage, fileFilter: function (req, file, cb) {
        const fileType = file.mimetype.split('/')[0];
        console.log('file size', file.size);
        if (fileType === 'image')
            cb(null, true);
        else
            cb(null, false);
    }
});
