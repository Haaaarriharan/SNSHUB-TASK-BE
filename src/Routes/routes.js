const express = require("express");
const Router = express.Router();
const RegisterController = require("../Controllers/registerController");
const EmployeeController = require("../Controllers/employeeController");

//REGISTER ROUTES
Router.route("/register").post(RegisterController.registerUser);

//EMPLOYEE ROUTES
Router.route("/employee-create").post(EmployeeController.createEmployee);
Router.route("/employee-list/:id").get(EmployeeController.getEmployeesByUserId);

module.exports = Router;
