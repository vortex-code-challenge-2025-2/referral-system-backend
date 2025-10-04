import express from "express";
import UserController from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/register", UserController.create);

export default userRouter;
