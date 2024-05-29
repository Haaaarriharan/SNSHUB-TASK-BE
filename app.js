const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./src/Routes/routes");
require("dotenv").config();
const app = express();

const cors = require("cors");
const logger = require("./src/Middleware/logger");

//MONGODB CONNECTION
mongoose
  .connect(process.env.MOONGOOSE_URL)
  .then((e) => console.log("connected"))
  .catch((e) => console.log(e));

//MIDDLEWARE SETUP
app.use(express.json()); //PARSE INCOMMING JSON REQUEST
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(logger());
//ROUTE INITIALIZATION
app.use("/api", Routes);

//PORT INITIALIZATION
app.listen(process.env.PORT, () => {
  console.log("PORT LISTENING ON 3000");
});
//port initialization
