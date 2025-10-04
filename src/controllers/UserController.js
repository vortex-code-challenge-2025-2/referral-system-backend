import User from "../models/User.js";
import { nanoid } from "nanoid";

export default class UserController {
  static create = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { ref: referralCode } = req.query;
      const ID_SIZE = 8;
      const uniqueLink = nanoid(ID_SIZE);

      const newUser = await User.create({
        name: name,
        email: email,
        password: password,
        link: uniqueLink,
      });

      if (referralCode) {
        const referringUser = User.findOne({ link: referralCode });
        if (referringUser) {
          referringUser.points++;
          await referringUser.save();
          console.log(
            `Usuário ${referringUser.name} recebeu 1 ponto por indicação.`
          );
        }
      }

      console.log(`User ${name} was successfully created!`);
      res
        .status(201)
        .json({ message: `User ${newUser.name} was successfully created!` });
    } catch (error) {
      console.error("Something wrong happened...", error);
      if (error.code === 11000) {
        return res
          .status(409)
          .json({ error: "The e-mail is already registered." });
      }
      if (error.name === "ValidationError") {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  };

  static profile = async (req, res) => {
    if (req.user) {
      res.status(200).json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        points: req.user.points,
        link: req.user.link,
      });
    } else {
      res.status(404).json({ error: "User not found." });
    }
  };
}
