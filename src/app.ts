import express, { Express } from 'express';
import 'dotenv/config'
import { logRequestMethodAndUrl } from './middlewares/logger'
import { connectDb } from './database/connection' ;
import { router as lectureRouter } from './routes/lecture';
import { router as lecturerRouter } from './routes/lecturer';
import { errorHandler } from './middlewares/errorHandler';

const app: Express = express();

const port = process.env.PORT || 3000;

// json parser
app.use(express.json());

// error handler middleware
app.use(errorHandler);

// log request method and url
app.use(logRequestMethodAndUrl);

// connect database
connectDb();

// lecture routes
const apiVersion = process.env.API_VERSION;
app.use(`/api/v${apiVersion}/lectures`, lectureRouter);

// lecturer routes
app.use(`/api/v${apiVersion}/lecturers`, lecturerRouter);

app.listen(port, ()=> {
    console.log(`Server is Listening on port: ${port}`);
});