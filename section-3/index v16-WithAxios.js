/* Making HTTP POST Request With Axios */

// const http = require("http"); // did not work
const { default: axios } = require("axios");
const http = require("https");

const data = JSON.stringify({
  name: "Charles Caleb",
  job: "Web Developer",
});

/*
const options = {
  hostname: "reqres.in", // reqres.in is a site to test app against real api
  path: "/api/users",
  method: "POST",
  header: { "Content-Type": "application/json" },
};

//request

const req = http.request(options, (res) => {
  let data = "";
  console.log("Status Code:", res.statusCode);

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Body:", JSON.parse(data));
  });
});

//req.write(data);
//req.end();
*/

axios
  .post("https://reqres.in/api/users", data)
  .then((res) => {
    console.log(`Status Code: ${res.status}`);
    console.log(`Body: ${JSON.stringify(res.data)}`);
  })
  .catch((err) => {
    console.log(err);
  });
