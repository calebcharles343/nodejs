/* Working with Views */

const express = require("express");
const app = express();

const PORT = 3000;
/*
NOTE: 
1, npm i pug
2, create default views folder
3, create index.pug in views folder
*/

app.set("view engine", "pug");
// app.set("views", "./specifyFileName"); //for custom fileNames diff from the default: 'views'

/*
// Without pug variable
app.get("/", function (req, res) {
  res.render("index"); 
});

*/

// With pug variable
app.get("/", function (req, res) {
  res.render("index", {
    title: "Express View Engine",
    h1: "Express Application",
    p: "Express Template Engine",
  });
});

/////////////////////////
//Create Server on PORT
/////////////////////////

app.listen(PORT, () => console.log("Server Started on http://localhost:3000"));
