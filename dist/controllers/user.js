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
exports.logout = exports.login = exports.createToken = exports.findById = exports.deleteById = exports.updateById = exports.findAll = exports.save = void 0;
const asyncwrapper_1 = require("../utils/asyncwrapper");
const user_1 = require("../services/user");
const responseStatusMessages_1 = require("../utils/responseStatusMessages");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_2 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
const jwtSecret = process.env.JWT_SECRECT;
const maxAge = 1 * 24 * 60 * 60; // 1 day in seconds
exports.save = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const saved = yield (0, user_1.saveUser)(user);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: saved
    });
}));
exports.findAll = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_1.findAllUsers)();
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: users
    });
}));
exports.updateById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    const { id } = req.params;
    const updated = yield (0, user_1.updateUserById)(id, newUser);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: updated
    });
}));
exports.deleteById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield (0, user_1.deleteUserById)(id);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: deleted
    });
}));
exports.findById = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, user_1.findUserById)(id);
    res.status(200).json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        data: user
    });
}));
const createToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = jsonwebtoken_1.default.sign(user, jwtSecret, {
            expiresIn: maxAge,
        });
        return token;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createToken = createToken;
// export const activateUser =  async(req: Request, res: Response) => {
//     const {userId} = req.params;
//     const user = await userModel.findOne({id: userId});
//     if (user) {
//        user.isActive = true;
//        await user.save();
//        const token = createToken(user);
//        res.cookie('jwt', token, {
//           httpOnly: true,
//           maxAge:  maxAge * 1000, // 1 day in msec
//        });
//        // res.locals.user = user;
//        const categories = await getAllCategories();
//        res.redirect('/');
//     }
//     else {
//        res.redirect('/');
//     }
//  } 
exports.login = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // finding the user on the database
    let user = yield user_2.userModel.findOne({ username });
    // if (!user) {
    //    user = await userModel.findOne({email: username});
    // }
    if (!user) {
        res.status(200).json({
            status: responseStatusMessages_1.FAIL_MESSAGE,
            message: 'user not found',
        });
    }
    if (user) {
        // comparing the entered password with the hashed password on the database
        if (user.password) {
            const result = yield bcrypt_1.default.compare(password, user.password);
            if (result) {
                // creating jwt token 
                const token = jsonwebtoken_1.default.sign({ id: user.id }, jwtSecret, {
                    expiresIn: maxAge,
                });
                res.cookie('jwt', token, {
                    maxAge: maxAge * 1000,
                    httpOnly: true,
                });
                res.status(200).json({ status: responseStatusMessages_1.SUCCESS_MESSAGE, token });
            }
            else {
                res.status(200).json({
                    status: responseStatusMessages_1.FAIL_MESSAGE,
                    message: 'password is not correct, please try again',
                });
            }
        }
    }
}));
exports.logout = (0, asyncwrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // removing jwt token from browser
    res.cookie('jwt', '');
    // redirecting to index page
    res.json({
        status: responseStatusMessages_1.SUCCESS_MESSAGE,
        message: 'user logged out successfully',
    });
}));
