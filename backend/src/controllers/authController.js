import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "mysecretkey";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.create({
      username,
      password
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login Successful",
    token
  });
};
