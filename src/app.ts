import express, { Express } from 'express';
import 'dotenv/config'
import { logRequestMethodAndUrl } from './middlewares/logger'
import { connectDb } from './database/connection' ;

const app: Express = express();

const port = process.env.PORT || 3000;

// json parser
app.use(express.json());

// log request method and url
app.use(logRequestMethodAndUrl);

// connect database
connectDb();

app.listen(port, ()=> {
    console.log(`Server is Listening on port: ${port}`);
});