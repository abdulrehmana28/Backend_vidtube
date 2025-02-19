import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(`Database connected:  ${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection error", error);
        process.exit(1);
    }
}

export { connectDB };