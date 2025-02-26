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
exports.deleteById = exports.save = exports.findById = exports.findAll = void 0;
const asyncwrapper_1 = require("../utils/asyncwrapper");
const lecturer_1 = require("../services/lecturer");
const responseStatusMessages_1 = require("../utils/responseStatusMessages");
exports.findAll = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lecturers = yield (0, lecturer_1.findAllLecturers)();
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: lecturers
    });
}));
exports.findById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const lecturer = yield (0, lecturer_1.findLecturerById)(id);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: lecturer
    });
}));
exports.save = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lecturer = req.body;
    const saved = yield (0, lecturer_1.saveLecturer)(lecturer);
    res.status(201).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: saved
    });
}));
exports.deleteById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield (0, lecturer_1.deleteLectureById)(id);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: deleted
    });
}));
