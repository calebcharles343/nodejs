////////////////////////
//Require module
////////////////////////
const express = require("express");
const path = require("path");
const fs = require("fs");

////////////////////////////////
//Create instance of the modules
////////////////////////////////
const app = express();
////////////////////////////
//SPECIFY PORT
///////////////////////////
const port = process.env.PORT || 3000;

///////////////////////////
//USE MIDDLEWARE
///////////////////////////
app.use(function (req, res, next) {
  console.log("Request Date:" + new Date());
  //res.send("Welcome to Middleware Application");
  next();
});

// Check if file exits using middleware
app.use(function (req, res, next) {
  const filepath = path.join(__dirname, "static", req.url);
  fs.stat(filepath, function (err, fileInfo) {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filepath);
    } else {
      next();
    }
  });
});

// handle 'file not found' exception
app.use(function (req, res) {
  res.status(404);
  res.send("File Not Found");
});

/////////////////////////////////////////////////
//ROUTE METHODS
/////////////////////////////////////////////////

/////////////////////////
//Create Server on PORT
/////////////////////////
app.listen(port, () =>
  console.log(`Listening to the server on http://localhost:${port}`)
);