const User = require("../models/user_model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200);
    res.send("Welcome to the Root Page");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ message: "Email Already Exists!" });
    }

    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
    //send the status only once
  } catch (error) {
    console.log(error);
  }
};

// login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // comparePassword method defined in auth-controller
    const user = await userExists.comparePassword(password);
    if (user) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email" });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// user login

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log("error from the user route");
  }
};

module.exports = { home, register, login, user };
