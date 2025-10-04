import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const generateToken = function (id) {
  dotenv.config();
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "8h" });
};

export default generateToken;
