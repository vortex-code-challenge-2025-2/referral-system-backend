import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/UserRoutes.js";

const app = express();
app.use(express.json());
await connectDB();

app.get("/", (req, res) => {
  res.send("Referral System API");
});
app.use("/api/user", userRouter);

app.use((req, res) => {
  res
    .status(404)
    .json({ error: `The route ${req.originalUrl} is not valid...` });
});

export default app;
