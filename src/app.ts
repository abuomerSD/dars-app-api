import express, { Express } from 'express';
import 'dotenv/config'
import { logRequestMethodAndUrl } from './middlewares/logger'
import { connectDb } from './database/connection' ;
import { router as lectureRouter } from './routes/lecture';
import { router as lecturerRouter } from './routes/lecturer';
import { router as usersRouter } from './routes/user';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';

const app: Express = express();

const port = process.env.PORT || 3000;

// json parser
app.use(express.json());

// log request method and url
if(process.env.NODE_ENV === 'development') {
    app.use(logRequestMethodAndUrl);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
}
// cors
app.use(cors());

// static files
app.use(express.static('uploads'));

// connect database
connectDb();

// lecture routes
const apiVersion = process.env.API_VERSION;
app.use(`/api/v${apiVersion}/lectures`, lectureRouter);

// lecturer routes
app.use(`/api/v${apiVersion}/lecturers`, lecturerRouter);

// user routes
app.use(`/api/v${apiVersion}/users`, usersRouter);

// error handler middleware
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Server is Listening on port: ${port}, Restart`);
});