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
exports.updateLecturerById = exports.findLecturerByName = exports.deleteLectureById = exports.saveLecturer = exports.findLecturerById = exports.findAllLecturers = void 0;
const lecturer_1 = require("../models/lecturer");
const findAllLecturers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lecturers = yield lecturer_1.lecturer.find();
        return lecturers;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findAllLecturers = findAllLecturers;
const findLecturerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lec = yield lecturer_1.lecturer.findById(id);
        return lec;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findLecturerById = findLecturerById;
const saveLecturer = (lec) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saved = yield lecturer_1.lecturer.create(lec);
        return saved;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveLecturer = saveLecturer;
const deleteLectureById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield lecturer_1.lecturer.findByIdAndDelete(id);
        return deleted;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteLectureById = deleteLectureById;
const findLecturerByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lec = yield lecturer_1.lecturer.find({ name: { $regex: name } });
        return lec;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findLecturerByName = findLecturerByName;
const updateLecturerById = (id, newLecturer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield lecturer_1.lecturer.findByIdAndUpdate({ _id: id }, newLecturer);
        return updated;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateLecturerById = updateLecturerById;
