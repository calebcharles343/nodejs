/* Path Module */

const path = require("path");

//file = path.dirname("Node.js - Youtube Daily Tuition/test.json");

/*
file = path.isAbsolute(
  "C:/Users/charles/Desktop/Node.js - Youtube Daily Tuition"
);
*/

/*
let dir = "Node.js - Youtube Daily Tuition";
file = path.join("C:/Users/charles/Desktop", dir, "test.json");
*/

//file = path.parse("Node.js - Youtube Daily Tuition/test.json");

//file = path.resolve("Node.js - Youtube Daily Tuition/test.json");
file = path.resolve("/Node.js - Youtube Daily Tuition", "test.json");

console.log(file);
