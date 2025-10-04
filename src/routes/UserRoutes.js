import express from "express";
import UserController from "../controllers/UserController.js";
import protect from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", UserController.create);
userRouter.get("/profile", protect, UserController.profile);

export default userRouter;
