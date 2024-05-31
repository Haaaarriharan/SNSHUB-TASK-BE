const Source = require("../Models/source");
const Employee = require("../Models/userManagementModel");
const UserType = require("../Models/userType");

//EMPLOYEE CREATION
exports.createEmployee = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const employees = new UserType(req.body);
    let result = await employees.save();
    res.status(200).json({
      data: result,
      message: "Employee created Successfully",
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Employee creation failed",
    });
  }
};

//EMPLOYEE LISTING
exports.getEmployeesByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const employees = await Employee.find({ userId: userId });
    res
      .status(200)
      .json({ data: employees, message: "Employees retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
