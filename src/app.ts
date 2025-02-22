import express, { Express } from 'express';
import 'dotenv/config'
import { logRequestMethodAndUrl } from './middlewares/logger'
import { connectDb } from './database/connection' ;
import { router as lectureRouter } from './routes/lecture';

const app: Express = express();

const port = process.env.PORT || 3000;

// json parser
app.use(express.json());

// log request method and url
app.use(logRequestMethodAndUrl);

// connect database
connectDb();

// lecture routes
const apiVersion = process.env.API_VERSION;
app.use(`/api/v${apiVersion}/lectures`, lectureRouter);

app.listen(port, ()=> {
    console.log(`Server is Listening on port: ${port}`);
});