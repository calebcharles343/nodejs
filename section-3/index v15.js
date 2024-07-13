/* Making HTTP GET Requests */

const http = require("http");

http.get("http://api.open-notify.org/astros.json", (resp) => {
  let data = "";
  resp.on("data", (chunck) => {
    data += chunck;
  });

  resp.on("end", () => {
    let jsonData = JSON.parse(data);
    console.log(jsonData);
  });
});
