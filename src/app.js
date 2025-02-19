import express from 'express';
// install cors for defining who can talk to application it is a middleware
// npm i cors
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
    // write what should be allowed
    cors({
        origin: process.env.CORS_ORIGIN,
        credential: true
    })
);

// these are also a middleware of express and limit of data will be 16 kb 
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser())

// import routes 
import { router } from './routes/healthCheck.routes.js';
import { userRouter } from './routes/user.routes.js';

// routes 
app.use("/api/v1/healthcheck", router);
app.use("/api/v1/users", userRouter);

export { app };