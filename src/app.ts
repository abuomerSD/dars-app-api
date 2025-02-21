import express, { Express } from 'express';
import 'dotenv/config'
import { logRequestMethodAndUrl } from './middlewares/logger'

const app: Express = express();

const port = process.env.PORT || 3000;

// json parser
app.use(express.json());

// log request method and url
app.use(logRequestMethodAndUrl);

app.listen(port, ()=> {
    console.log(`Server is Listening on port: ${port}`);
});