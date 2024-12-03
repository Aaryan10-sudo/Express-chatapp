import { config } from "dotenv";
import mongoose from "mongoose";

config();
export const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("connected to database");
};
