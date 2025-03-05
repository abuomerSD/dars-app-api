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
exports.updateById = exports.deleteById = exports.findByLecturerName = exports.findById = exports.findAll = exports.save = void 0;
const asyncwrapper_1 = require("../utils/asyncwrapper");
const lecture_1 = require("../services/lecture");
const responseStatusMessages_1 = require("../utils/responseStatusMessages");
// save lecture to database
exports.save = (0, asyncwrapper_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const lecture = req.body;
    lecture.image = '/uploads/images/' + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
    const saved = yield (0, lecture_1.saveLecture)(lecture);
    res.status(201).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: saved,
    });
}));
// returns all lectures as json
exports.findAll = (0, asyncwrapper_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const lectures = yield (0, lecture_1.findAllLectures)();
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: lectures
    });
}));
// find lecture by id
exports.findById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const lec = yield (0, lecture_1.findLectureById)(id);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: lec
    });
}));
// filter By Lecturer name
exports.findByLecturerName = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lecturerName } = req.params;
    const lectures = yield (0, lecture_1.findLectureByLecturerName)(lecturerName);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: lectures,
    });
}));
// delete By Id 
exports.deleteById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield (0, lecture_1.deleteLectureById)(id);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: deleted,
    });
}));
// update By Id
exports.updateById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    const oldLecture = yield (0, lecture_1.findLectureById)(id);
    const newLecture = req.body;
    newLecture.image = '/uploads/images/' + ((_b = req.file) === null || _b === void 0 ? void 0 : _b.filename);
    const updated = yield (0, lecture_1.updateLectureById)(id, newLecture);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: updated,
    });
}));
