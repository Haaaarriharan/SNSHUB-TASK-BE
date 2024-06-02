const express = require("express");
const Router = express.Router();
const RegisterController = require("../Controllers/registerController");
const userManagementController = require("../Controllers/userManagementController");
const verifyToken = require("../Middleware/jwtauthentication");

//REGISTER ROUTES
Router.route("/register").post(RegisterController.registerUser);
Router.route("/login").post(RegisterController.loginUser);

//EMPLOYEE ROUTES
Router.route("/user/create").post(
  verifyToken,
  userManagementController.createUser
);
Router.route("/user/update/:id").patch(
  verifyToken,
  userManagementController.updateUserData
);
Router.route("/user/remove/:id").patch(
  verifyToken,
  userManagementController.removeUserData
);
Router.route("/user/listall").post(
  verifyToken,
  userManagementController.getAllUserDatas
);
Router.route("/usertype/list").get(
  verifyToken,
  userManagementController.getAllUserType
);
Router.route("/product/list").get(
  verifyToken,
  userManagementController.getAllProduct
);
Router.route("/source/list").get(
  verifyToken,
  userManagementController.getAllSource
);

module.exports = Router;
