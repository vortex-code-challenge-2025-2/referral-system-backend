import mongoose from "mongoose";
import dotenv from "dotenv";

export default async function connectDB() {
  try {
    dotenv.config();
    const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
    if (!DB_CONNECTION_STRING)
      throw new ReferenceError("The DB Connection String is missing...");
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("A database connection was successfully established!");
  } catch (error) {
    console.log(
      "Failed to establish a database connection... Log in details:",
      error
    );
    process.exit(1)
  }
}
