const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./src/Routes/routes");
require("dotenv").config();
const app = express();
const cors = require('cors')

const PORT = 5003;
const MONGO_URL = "mongodb+srv://arun:1234qwer@cluster0.fjoxwv9.mongodb.net/employee";

//mongodb connection
mongoose
    .connect(MONGO_URL)
    .then((e) => console.log("connected"))
    .catch((e) => console.log(e));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//route initialization
app.use("/api", Routes);

//port initialization
app.listen(PORT, () => {
    console.log("PORT LISTENING ON 5003");
});
