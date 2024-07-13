/* 
Starting Core Expres

ADVANCE TOPICS
1, Sessions
2, Cookies
3, Core Middleware
4, core Routing
5, Build own API's
6, core view
7, Database Integration
*/

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

////////////////////////////////////
//Serialise input data to access the data
////////////////////////////////////
app.use(
  express.urlencoded({
    extended: true,
  })
);

///////////////////////////
//PUG Extension file path
///////////////////////////

//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/////////////////////////////////////////////////
//ROUTE METHODS
/////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.render("index", { title: "Form Handling" });
});

app.post("/form_submit", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  res.end(`Your Username is: ${username} and Email is: ${email}`);
});

/////////////////////////
//Create Server on PORT
/////////////////////////

app.listen(PORT, () =>
  console.log(`Listening to requests on http://localhost:${PORT}`)
);
