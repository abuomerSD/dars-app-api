"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const logger_1 = require("./middlewares/logger");
const connection_1 = require("./database/connection");
const lecture_1 = require("./routes/lecture");
const lecturer_1 = require("./routes/lecturer");
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// json parser
app.use(express_1.default.json());
// error handler middleware
app.use(errorHandler_1.errorHandler);
// log request method and url
app.use(logger_1.logRequestMethodAndUrl);
// static files
app.use(express_1.default.static('uploads'));
// connect database
(0, connection_1.connectDb)();
// lecture routes
const apiVersion = process.env.API_VERSION;
app.use(`/api/v${apiVersion}/lectures`, lecture_1.router);
// lecturer routes
app.use(`/api/v${apiVersion}/lecturers`, lecturer_1.router);
app.listen(port, () => {
    console.log(`Server is Listening on port: ${port}`);
});
