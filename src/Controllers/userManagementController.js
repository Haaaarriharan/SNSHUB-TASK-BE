const Product = require("../Models/product");
const Register = require("../Models/registerModel");
const Source = require("../Models/source");
const User = require("../Models/userManagementModel");
const UserType = require("../Models/userType");

//USER CREATION
exports.createUser = async (req, res) => {
  try {
    const employees = new User(req.body);
    let result = await employees.save();
    res.status(200).json({
      data: result,
      message: "User created Successfully",
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "User creation failed",
    });
  }
};
//UPDATE USER
exports.updateUserData = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ data: updatedUser, message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// REMOVE USER
exports.removeUserData = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ data: updatedUser, message: "User deactivated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//USER LISTING
exports.getAllUserDatas = async (req, res) => {
  // const { skip = 0, limit = 10 } = req.query;
  try {
    const updates = req.body;

    // GET /user/listall?skip=10&limit=5
    if (Object.keys(updates.where).length == 0) delete updates?.where;

    const employees = await Register.find(updates);
    res
      .status(200)
      .json({ data: employees, message: "User retrieved successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// LIST USER TYPE
exports.getAllUserType = async (req, res) => {
  try {
    const employees = await UserType.find({});
    res
      .status(200)
      .json({ data: employees, message: "Employees retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// LIST PRODUCT
exports.getAllProduct = async (req, res) => {
  try {
    const employees = await Product.find({});
    res
      .status(200)
      .json({ data: employees, message: "Employees retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//LIST SOURCE
exports.getAllSource = async (req, res) => {
  try {
    const employees = await Source.find({});
    res
      .status(200)
      .json({ data: employees, message: "Employees retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
