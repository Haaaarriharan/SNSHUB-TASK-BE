const express = require("express");
const Router = express.Router();
const RegisterController = require("../Controllers/registerController");
const userManagementController = require("../Controllers/userManagementController");
const verifyToken = require("../Middleware/jwtauthentication");

//REGISTER ROUTES
Router.route("/register").post(RegisterController.registerUser);
Router.route("/login").post(RegisterController.loginUser);

//EMPLOYEE ROUTES
Router.route("/employee-create").post(userManagementController.createEmployee);
Router.route("/employee-list/:id").get(
  userManagementController.getEmployeesByUserId
);

module.exports = Router;
