const { userModel } = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({ message: "user already register" });
    }
    const hashedPassword = await bcrypt.hash(password, 4);
    const newUser = new userModel({
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ message: "sucessfully register", user: newUser });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ message: "wrong credential" });
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.json({ message: "wrong password" });
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
    res.json({ token, user });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
