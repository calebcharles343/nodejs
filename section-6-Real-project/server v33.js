/* Understanding Cookies */
//Note: npm i cookie-parser

const express = require("express");
const app = express();

////////////////////////////
//SPECIFY PORT
///////////////////////////
const port = process.env.PORT || 3000;

////////////////////////////////////
//Initialise view engine: ejs template
////////////////////////////////////
app.set("view engine", "ejs");

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
  res.render("base", { title: "Login System" });
});

/////////////////////////
//Create Server on PORT
/////////////////////////
app.listen(port, () =>
  console.log(`Listening to the server on http://localhost:${port}`)
);