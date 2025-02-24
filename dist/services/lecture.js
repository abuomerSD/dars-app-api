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
exports.findLectureByLecturerName = exports.findAllLectures = exports.findLectureById = exports.deleteLectureById = exports.updateLecture = exports.saveLecture = void 0;
const lecture_1 = require("../models/lecture");
const asyncwrapper_1 = require("../utils/asyncwrapper");
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
exports.updateLecture = (0, asyncwrapper_1.asyncWrapper)(() => __awaiter(void 0, void 0, void 0, function* () {
}));
// delete lecture
const deleteLectureById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield lecture_1.lecture.findOneAndDelete(id);
        // console.log(deleted);
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
const findAllLectures = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lectures = yield lecture_1.lecture.find();
        return lectures;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findAllLectures = findAllLectures;
// find by lecturer name
const findLectureByLecturerName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lectures = yield lecture_1.lecture.find({ lecturer: { $regex: name } });
        return lectures;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findLectureByLecturerName = findLectureByLecturerName;
