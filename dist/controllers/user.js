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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.deleteById = exports.updateById = exports.findAll = exports.save = void 0;
const asyncwrapper_1 = require("../utils/asyncwrapper");
const user_1 = require("../services/user");
const responseStatusMessages_1 = require("../utils/responseStatusMessages");
exports.save = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const saved = yield (0, user_1.saveUser)(user);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: saved
    });
}));
exports.findAll = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
exports.updateById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
exports.deleteById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
exports.findById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
