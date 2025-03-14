"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.findAllUsers = exports.updateUserById = exports.deleteUserById = exports.saveUser = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const saveUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
        user.password = hashedPassword;
        const u = new user_1.userModel(user);
        const saved = yield u.save();
        return saved;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveUser = saveUser;
const deleteUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield user_1.userModel.findByIdAndDelete(id);
        return deleted;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUserById = deleteUserById;
const updateUserById = (id, newUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        const updated = yield user_1.userModel.findByIdAndUpdate({ _id: id }, newUser);
        return updated;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateUserById = updateUserById;
const findAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.userModel.find();
        return users;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findAllUsers = findAllUsers;
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.userModel.findById(id);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findUserById = findUserById;
