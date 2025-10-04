import User from "../models/User.js";
import generateToken from "../utils/jwt.js";

export default class AuthController {
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res
          .status(400)
          .json({ message: "Please provide both e-mail and password." });

      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ error: "Invalid credentials." });
      }
      const token = generateToken(user._id);
      return res.status(200).json({
        message: `User ${user.name} has been successfully logged in!`,
        token: token,
      });
    } catch (error) {
      console.error("Failed to log in...", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
