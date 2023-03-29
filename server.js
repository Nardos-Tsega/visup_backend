const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const user = require("./Routes/User.routes.js");
const connectDB = require("./Database/connectDB.js");

//create app
const app = express();
const port = process.env.PORT || 5000;

//connect to database
connectDB();

//cors and request middlewares
app.use(cors());
app.use(express.json());

//route middlewares
app.use("/api/v1/users", user);
app.use("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

//listen to request
app.listen(port, () => {
  console.log(`App running on : ${port}`.brightCyan);
});
