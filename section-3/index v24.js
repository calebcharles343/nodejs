/* Exception Handling */

/*
throw new Error("error message");
// Try catch prefered for sychronous code
try {
  //lines of code
} catch (e) {}

// promises and async wait prefered for asychronous code
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch((err) => console.error(err));
*/

///////////////////
// TRY CATCH
///////////////////
/*
try {
  console.log("Start try block");
  lalala;
  console.log("end try block");
} catch (err) {
  console.log("Error Message", err);
}
*/

////////////////////////
//PROMISES
///////////////////////

doSomething1()
  .then(() => {
    return doSomething2().catch((err) => {
      //handle error
      throw err; //break the chain!
    });
  })
  .then(() => {
    return doSomething2().catch((err) => {
      //handle error
      throw err; //break the chain
    });
  })
  .catch((err) => console.error(err));

///////////////////////
//ASYNC AWAIT
///////////////////////

async function someFunction() {
  try {
    await someFunction();
  } catch (err) {
    console.error(err, message);
  }
}
