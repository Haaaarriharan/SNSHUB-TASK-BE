const Register = require("../Models/registerModel");
const bcrypt = require("bcryptjs");
const STATUS_CODE = require("../Utils/statusCode");
const comparePassword = require("../Utils/utils");
let jwt = require("jsonwebtoken");

// SIGNUP FUNCTION
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await Register.findOne({ email });
    if (checkUser) {
      return res.status(STATUS_CODE.notFound).json({
        message: "Email Already exists",
      });
    }
    const pswrd = await bcrypt.hash(password, 10);
    const registerUser = new Register({
      name,
      email,
      password: pswrd,
    });
    await registerUser.save();
    res.json({
      data: registerUser,
      message: "User Register Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Not registered",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await Register.findOne({ email });
    if (!checkUser) {
      return res.status(STATUS_CODE.notFound).json({
        message: "Email not found...",
      });
    }

    let verifyPassword = await comparePassword(password, checkUser?.password);

    if (!verifyPassword) {
      return res.status(STATUS_CODE.notFound).json({
        message: "Incorrect password...",
      });
    }

    const token = jwt.sign({ userId: checkUser?.id }, "your-secret-key", {
      expiresIn: "1h",
    });

    console.log("token", token);

    res.json({
      data: checkUser,
      message: "User loged In Successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Not registered",
    });
  }
};
