"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const uuid_1 = require("uuid");
const userSchema = new Schema({
    _id: {
        type: String,
        default: () => (0, uuid_1.v4)(),
    },
    username: {
        type: String,
        unique: true
    },
    password: String,
}, {
    timestamps: true,
    versionKey: false,
});
exports.userModel = mongoose_1.default.model('User', userSchema);
