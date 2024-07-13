/* Serving Static Files in Node */

const express = require("express");
const path = require("path");

const app = express();
const publicpath = path.resolve(__dirname, "public"); // To dynamically get the root folder name

/////////////////////////////////////////////////
//Load inbuilt express Middleware function static
/////////////////////////////////////////////////
app.use(express.static("public"));
app.use(express.static("images"));
app.use(express.static("files"));

app.use(publicpath, express.static("static")); // nested folders

/////////////////////////////////
//File
/////////////////////////////////
<img src="public/img__girl.jpg"></img>;

////////////////////////
//Create Request route
/////////////////////////
app.get("/", function (req, res) {
  res.send(`Static Files`);
});

/////////////////////////
//Create server on Port
/////////////////////////

app.listen(3000, () => console.log("App Started on Port 3000"));
