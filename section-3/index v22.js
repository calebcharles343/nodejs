/* Streams */

///////////////////////////////////////
//Standard File Handling for small data (sends data all at once)
///////////////////////////////////////
/*
const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  fs.readFile("test.json", (err, data) => {
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Application Started on PORT 3000");
});
*/

///////////////////////////////////////
//Stream file Handling for Large data (sends data piece by piece)
///////////////////////////////////////

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream("test.json");
  stream.pipe(res);
});

server.listen(8000, () => {
  console.log("Application Started on PORT 8000");
});
