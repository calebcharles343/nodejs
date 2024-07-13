/* Middleware */

const express = require("express");

const app = express();

///////////////////////
//Create Middleware
///////////////////////
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

const requesTime = function (req, res, next) {
  req.reqTime = Date.now();
  next();
};

/////////////////////////
//Load Middleware function
/////////////////////////
app.use(myLogger);
app.use(requesTime);

////////////////////////
//Create Request route
/////////////////////////
app.get("/", function (req, res) {
  res.send(`Current Time: ${req.reqTime}`);
});

/////////////////////////
//Create Port
/////////////////////////

app.listen(3000, () => console.log("App Started on Port 3000"));
