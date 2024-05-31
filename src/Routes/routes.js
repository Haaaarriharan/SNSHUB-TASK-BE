const express = require("express");
const Router = express.Router();
const RegisterController = require("../Controllers/registerController");
const userManagementController = require("../Controllers/userManagementController");
const verifyToken = require("../Middleware/jwtauthentication");

//REGISTER ROUTES
Router.route("/register").post(RegisterController.registerUser);
Router.route("/login").post(RegisterController.loginUser);

//EMPLOYEE ROUTES
Router.route("/user/create").post(userManagementController.createUser);
Router.route("/user/update/:id").patch(userManagementController.updateUserData);
Router.route("/user/remove/:id").patch(userManagementController.removeUserData);
Router.route("/user/listall").get(userManagementController.getAllUserDatas);
Router.route("/usertype/list").get(userManagementController.getAllUserType);
Router.route("/product/list").get(userManagementController.getAllProduct);
Router.route("/source/list").get(userManagementController.getAllUserType);

module.exports = Router;
