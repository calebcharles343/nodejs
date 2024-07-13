/* Working with Sessions*/
//Note: npm i express-session

const express = require("express");
const app = express();

const session = require("express-session");

const PORT = process.env.PORT || 3000;

////////////////////////////////////
//Set up express-session middleware
////////////////////////////////////
app.use(
  session({
    secret: "Your Secret Key",
    resave: true,
    saveUninitialized: true,
  })
);

/////////////////////////////////////////////////
//ROUTE METHODS
/////////////////////////////////////////////////

app.get("/", (req, res) => {
  req.session.name = "Charles";
  return res.send("Session Set");
});

app.get("/session", (req, res) => {
  const name = req.session.name;
  console.log(req.session);
  return res.send(name);
});

//to destroy session
app.get("/destroy", (req, res) => {
  req.session.destroy(function (error) {
    console.log("Session Destroyed");
  });

  res.end();
});

/////////////////////////
//Create Server on PORT
/////////////////////////
app.listen(PORT, () =>
  console.log(`Listening to requests on http://localhost:${PORT}`)
);
