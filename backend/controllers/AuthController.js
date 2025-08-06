const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");


module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, createdAt } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    // LOGIN flow
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.json({ message: "Incorrect password" });
      }
      const token = createSecretToken(existingUser._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      return res.json({ message: "User logged in successfully", success: true });
    }

    // SIGNUP flow
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      createdAt: createdAt || new Date(),
    });

    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.json({ message: "User registered successfully", success: true, user: newUser });
    next();

  } catch (error) {
    console.error("Auth error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};