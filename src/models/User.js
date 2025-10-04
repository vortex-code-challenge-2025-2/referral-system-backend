import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "The name is mandatory."] },
    email: {
      type: String,
      lowercase: true,
      required: [true, "The e-mail is mandatory."],
      unique: true,
    },
    password: { type: String, required: [true, "The password is mandatory."] },
    points: { type: Number, default: 0 },
    link: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const SALT_ROUNDS = 10;
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

export default mongoose.model("User", userSchema, "users");
