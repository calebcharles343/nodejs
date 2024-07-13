/* Event loop */

/*
///////////////////////////////////
//Synchronous
//////////////////////////////////
const bar = () => console.log("bar");
const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  bar();
  baz();
};

foo();
*/

///////////////////////////////////
//Asynchronous
//////////////////////////////////

const bar = () => console.log("bar");
const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 1000);
  baz();
};

foo();
