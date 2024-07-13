/* Understanding Cookies */
//Note: npm i cookie-parser

const express = require("express");
const app = express();

const cookies = require("cookie-parser");

////////////////////////////
//SPECIFY PORT
///////////////////////////
const PORT = process.env.PORT || 3000;

////////////////////////////////////
//Set up cookie-parser middleware
////////////////////////////////////
app.use(cookies());

///////////////
//DATA
///////////////
let user = {
  name: "Charles",
  Age: 30,
};

/////////////////////////////////////////////////
//ROUTE METHODS
/////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.send("Cookies Tutorial");
});

app.get("/setUser", (req, res) => {
  res.cookie("userData", user);
  res.send("User Data Added to Cookies");
});

//Note: to get cookie data
app.get("/getuser", (req, res) => {
  res.send(req.cookies);
});

//Note: to destroy cookie
app.get("/logout", (req, res) => {
  res.clearCookie("userData");
  res.send("User logout successfully");
});

/////////////////////////
//Create Server on PORT
/////////////////////////
app.listen(PORT, () =>
  console.log(`Listening to requests on http://localhost:${PORT}`)
);
