////////////////////////
//Require module
////////////////////////
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const router = require("./router");

////////////////////////////////
//Create instance of the modules
////////////////////////////////

const app = express();
////////////////////////////
//SPECIFY PORT
///////////////////////////
const port = process.env.PORT || 3000;

/////////////////////////////////////////
//To recieve data in formatted form(json)
/////////////////////////////////////////
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

////////////////////////////////////
//Initialise view engine: ejs template
////////////////////////////////////
app.set("view engine", "ejs");

///////////////////////////
//Load static assets
///////////////////////////
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/////////////////////////////////////
//create session with uuid unique key
/////////////////////////////////////

app.use(
  session({
    // secret: "secret",
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/route", router); //to add all routes in the router.js file
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
