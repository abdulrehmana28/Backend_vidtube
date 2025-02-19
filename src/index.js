import dotenv from 'dotenv';
// require('dotenv').config();
import { app } from './app.js';
import { connectDB } from './db/index.js';

// const PORT = 3001; use the Environment variables instead

// configure where to look for variables
dotenv.config({
    path: "./src/.env"
});

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on port: ${PORT}...`);

        });
    })
    .catch((err) => {
        console.log("database connection error", err);
    });