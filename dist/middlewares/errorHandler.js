"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const responseStatusMessages_1 = require("../utils/responseStatusMessages");
function errorHandler(error, req, res, next) {
    if (error) {
        res.status(400).json({
            status: responseStatusMessages_1.FAIL_MESSAGE,
            data: error.message,
        });
        next();
    }
}
exports.errorHandler = errorHandler;
