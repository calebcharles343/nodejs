/* Routing with Express */

const express = require("express");
const app = express();

const PORT = 3000;

const data = {
  id: 1,
  name: "Charles",
};

////////////////////////
//Create Request route
/////////////////////////

//Send text to brower
app.get("/", (req, res) => {
  res.end(`Welcome to my Homepages`);
});

app.get("/about", (req, res) => {
  res.send(`welcome to my About page`);
});

app.get("/weather", (req, res) => {
  res.send(`The current weather is NICE`);
});

//send json data to browser
app.get("/data", (req, res) => {
  res.json(data);
});

//send static files to browser
app.get("/weather", (req, res) => {
  res.sendFile("/static/index.html");
});

/////////////////////////
//Create Server on PORT
/////////////////////////

app.listen(PORT, () => console.log("App Started on PORT", PORT));
