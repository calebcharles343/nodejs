/* Working with files in Node*/

const fs = require("fs");
const { METHODS } = require("http");

/////////////////////
//METHODS
/////////////////////
/*
// Async Method 
fs.watchFile()
fs.readFile()
fs.unlink()

 or
 
// Sync Method 
fs.writeFileSync()
fs.readFileSync()
fs.unlinkSync()
*/
/////////////////////////////////
//ASYNCHRONOUNS
////////////////////////////////

/*
// read, write, update
const content = "Node Application";

fs.writeFile("test.txt", content, { flag: "w+" }, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Successfully Done");
});
*/

// To delete a file
fs.unlink("test.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("file removed");
});

//////////////////////////////////
//SYNCHRONOUNS
//////////////////////////////////
/*
const content = {
  type: "Node Application",
};

fs.writeFileSync("test.json", JSON.stringify(content));
*/
//status
