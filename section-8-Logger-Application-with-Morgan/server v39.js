////////////////////////
//Require module
////////////////////////
const express = require("express");
const path = require("path");
const morgan = require("morgan");

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

// app.use(morgan("combined"));
// app.use(morgan("tiny"));
app.use(morgan(":method :status :url'HTTP/:http-version'")); //morgan tokens

/////////////////////////////////////////////////
//ROUTE METHODS
/////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.end("Morgan Logger App");
});

/////////////////////////
//Create Server on PORT
/////////////////////////
app.listen(port, () =>
  console.log(`Listening to the server on http://localhost:${port}`)
);
