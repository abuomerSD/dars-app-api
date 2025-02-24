"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequestMethodAndUrl = void 0;
const logRequestMethodAndUrl = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
exports.logRequestMethodAndUrl = logRequestMethodAndUrl;
