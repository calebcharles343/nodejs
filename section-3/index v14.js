/* Create HTTP Server */

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Welcome to HTTP server");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});


*/
// This is also valid
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); // to write statusCode and setHeader in a single line
    res.write("Welcome to HTTP server"); // to write response body independently
    res.end(); // to end response body independently
    // res.end("Welcome to HTTP server"); // to write and end response body in a single line
  })
  .listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
  });
