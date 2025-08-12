const Register = require("../Models/registerModel");
const bcrypt = require("bcryptjs");
const STATUS_CODE = require("../Utils/statusCode");
const comparePassword = require("../Utils/utils");
let jwt = require("jsonwebtoken");

// SIGNUP FUNCTION
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, userTypeId } = req.body;
    const checkUser = await Register.findOne({ email });
    if (checkUser) {
      return res.status(STATUS_CODE.notFound).json({
        message: "Email Already exists",
      });
    }
    const pswrd = await bcrypt.hash(password, 10);
    let payload = {
      name,
      email,
      password: pswrd,
      phoneNumber,
      userTypeId,
    };
    console.log("dksndjnsjnd", payload);
    const registerUser = new Register(payload);
    await registerUser.save();
    res.json({
      data: registerUser,
      message: "User Register Successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Not registered",
    });
  }
};

// LOGIN
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
    console.log("i am the best person", verifyPassword);

    if (!verifyPassword) {
      return res.status(STATUS_CODE.notFound).json({
        message: "Incorrect password...",
      });
    }
    // creating autherization token with the user and use it with the header
    const token = jwt.sign({ userId: checkUser?.id }, "your-secret-key", {
      expiresIn: "10h",
    });

    console.log("token", token);

    res.json({
      data: checkUser,
      token,
      message: "User loged In Successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Not registered",
    });
  }
};

exports.ForgotPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await Register.findOne({ email });
    if (!checkUser) {
      return res.status(STATUS_CODE.notFound).json({
        message: "Email not found...",
      });
    }

    const pswrd = await bcrypt.hash(password, 10);
    let final_payload = {
      email,
      password: pswrd,
    };

    console.log("dsdnkdndn" , final_payload)

    updatePassword = await Register.findByIdAndUpdate(
      checkUser?.id,
      final_payload,
      {
        new: true,
      }
    );

    res.json({
      data: checkUser,
      message: "Password Updated Succesfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Not registered",
    });
  }
};
