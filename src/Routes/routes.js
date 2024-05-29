const express = require("express");
const Router = express.Router();
const RegisterController = require("../Controllers/registerController");
const EmployeeController = require("../Controllers/employeeController")

//register routes
Router.route("/register").post(RegisterController.registerUser);

//employee routes
Router.route("/employee-create").post(EmployeeController.createEmployee);
Router.route("/employee-list/:id").get(EmployeeController.getEmployeesByUserId);



module.exports = Router;
