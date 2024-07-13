/* What is Routing: Performing tasks on a particular path */

const http = require("http");

/*
function index(request, response) {
  response.writeHead(200);
  response.end("Node Routing");
}

function aboutus(request, response) {
  response.end("This is About Page");
}

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      return index(req, res);
    }
    if (req.url === "/aboutus") {
      return aboutus(req, res);
    }
  })
  .listen(8000);

*/

const routes = {
  "/": function index(request, response) {
    response.writeHead(200);
    response.end("Node Routing");
  },
  "/aboutus": function aboutus(request, response) {
    response.end("This is About Page");
  },
};

http
  .createServer(function (req, res) {
    if (req.url in routes) {
      return routes[req.url](req, res);
    }
  })
  .listen(process.env.PORT || 8000);
