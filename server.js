import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT ?? 3000;
const app = express();
await connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
app.get("/", (req, res) => {
  res.send("Referral System API");
});
