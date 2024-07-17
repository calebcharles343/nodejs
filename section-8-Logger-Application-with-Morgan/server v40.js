////////////////////////
//Require module
////////////////////////
const express = require("express");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

////////////////////////////////
//Create instance of the modules
////////////////////////////////
const app = express();
////////////////////////////
//SPECIFY PORT
///////////////////////////
const port = process.env.PORT || 3000;

/////////////////////////////
//Create morgan token
/////////////////////////////

morgan.token("id", function getId(req) {
  return req.id;
});

//custom token
morgan.token("param", function (req, res, param) {
  return "userToken";
});

///////////////////////////
//USE MIDDLEWARE
///////////////////////////
// app.use(morgan("combined"));
// app.use(morgan("tiny"));

app.use(assignid);
//Append logger info inside a file
let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan(":id :param :method :status :url'HTTP/:http-version'")); //morgan tokens
app.use(
  morgan(":id :param :method :status :url'HTTP/:http-version'", {
    stream: accessLogStream,
  })
);

// app.use(
//   morgan(":param ", {
//     stream: accessLogStream,
//   })
// );

/////////////////////////////////////////////////
//ROUTE METHODS
/////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.end("Morgan Logger App");
});

//Note: this is a middleware function used before declaration 'WHY?'
function assignid(req, res, next) {
  req.id = uuidv4();
  next();
}

// const assignID = (req, res, next) =>

/////////////////////////
//Create Server on PORT
/////////////////////////
app.listen(port, () =>
  console.log(`Listening to the server on http://localhost:${port}`)
);
