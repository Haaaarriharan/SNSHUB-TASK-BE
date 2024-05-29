const Register = require("../Models/registerModel");
const bcrypt = require("bcryptjs");

// SignUp Function
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await Register.findOne({ email });
    if (checkUser) {
      return res.status(401).json({
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
      mssage: "User Register Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Not registered",
    });
  }
};

