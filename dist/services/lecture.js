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
exports.findLectureByLecturerName = exports.findAllLectures = exports.findLectureById = exports.deleteLectureById = exports.updateLectureById = exports.saveLecture = void 0;
const lecture_1 = require("../models/lecture");
const fs_1 = __importDefault(require("fs"));
// save lecture to database
const saveLecture = (l) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lec = new lecture_1.lecture(l);
        const saved = yield lec.save();
        return saved;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveLecture = saveLecture;
// update By Id
const updateLectureById = (id, newLecture) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield lecture_1.lecture.findOneAndUpdate({ _id: id }, newLecture);
        return updated;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateLectureById = updateLectureById;
// delete lecture
const deleteLectureById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield lecture_1.lecture.findByIdAndDelete(id);
        const imgName = deleted === null || deleted === void 0 ? void 0 : deleted.image;
        fs_1.default.unlinkSync(`./uploads${imgName}`);
        return deleted;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteLectureById = deleteLectureById;
// find by id
const findLectureById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lec = yield lecture_1.lecture.findById(id);
        return lec;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findLectureById = findLectureById;
// return array of lectures 
const findAllLectures = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allLectures = yield lecture_1.lecture.find({});
        const tot = allLectures.length;
        const skip = (page - 1) * limit;
        const lectures = yield lecture_1.lecture.find().skip(skip).limit(limit);
        return { lectures, tot };
    }
    catch (error) {
        console.log(error);
    }
});
exports.findAllLectures = findAllLectures;
// find by lecturer name
const findLectureByLecturerName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lectures = yield lecture_1.lecture.find({ title: { $regex: name } });
        return lectures;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findLectureByLecturerName = findLectureByLecturerName;
