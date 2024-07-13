/* Working with files in Node*/

const fs = require("fs");

//Asynchronous
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Asynchronous:", data);
});

//Synchronous
const data = fs.readFileSync("test.txt", { encoding: "utf-8", flag: "r" });

console.log("Synchronous:", data);

//status
fs.stat("test.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.size);
});
