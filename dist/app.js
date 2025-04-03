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
const user_1 = require("./routes/user");
const errorHandler_1 = require("./middlewares/errorHandler");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// json parser
app.use(express_1.default.json());
// body parser
app.use(express_1.default.urlencoded({ extended: false }));
// log request method and url
if (process.env.NODE_ENV === 'development') {
    app.use(logger_1.logRequestMethodAndUrl);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
}
// cors
app.use((0, cors_1.default)());
// cookie parser
app.use((0, cookie_parser_1.default)());
// static files
app.use(express_1.default.static('uploads'));
// connect database
(0, connection_1.connectDb)();
// lecture routes
const apiVersion = process.env.API_VERSION;
app.use(`/api/v${apiVersion}/lectures`, lecture_1.router);
// lecturer routes
app.use(`/api/v${apiVersion}/lecturers`, lecturer_1.router);
// user routes
app.use(`/api/v${apiVersion}/users`, user_1.router);
// error handler middleware
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`Server is Listening on port: ${port}, Restart`);
});
