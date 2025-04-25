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
exports.adminAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = require("../models/user");
const responseStatusMessages_1 = require("../utils/responseStatusMessages");
dotenv_1.default.config();
const jwtSecret = process.env.JWT_SECRECT;
function adminAuth(req, res, next) {
    const token = req.body.token;
    if (token) {
        jsonwebtoken_1.default.verify(token, jwtSecret, (err, decodedToken) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                throw new Error(err);
                res.locals.user = null;
                next();
            }
            else {
                const user = yield user_1.userModel.findOne({ _id: decodedToken.id });
                res.locals.user = user;
                if (user) {
                    next();
                }
                else {
                    // throw new Error('This Route is only for Admins');
                    res.json({
                        status: responseStatusMessages_1.FAIL_MESSAGE,
                        message: 'This Route is only for Admins',
                    });
                }
            }
        }));
    }
    else {
        res.locals.user = null;
        // throw new Error("Please Login First");
        res.json({
            status: responseStatusMessages_1.FAIL_MESSAGE,
            message: "Please Login First",
        });
    }
}
exports.adminAuth = adminAuth;
