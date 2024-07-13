/* Event Module */

const events = require("events");
//////////////////////////////////
//Creating event instance
//////////////////////////////////
let ev = new events.EventEmitter();
let ev1 = new events.EventEmitter();

////////////////////////////////////////
//Create event to execute multiple times
////////////////////////////////////////
ev.on("my_event", function (data) {
  console.log("Event:", data);
});

/////////////////////////////////
//Create event to execute once
/////////////////////////////////
//ev1.once("eventOnce", () => console.log("Event once fired"));
//ev1.once("eventOnce", (code, msg) => console.log(`Got ${code} and ${msg}`));

const cb1 = (code, msg) => console.log(`Got ${code} and ${msg}`);

ev1.once("eventOnce", cb1);

/////////////////////////////
//raise or call event
/////////////////////////////
ev.emit("my_event", "Call emit() method to fire my_event");
ev.emit("my_event", "Call emit() method to fire my_event");

//ev1.emit("eventOnce");
//ev1.emit("eventOnce");

ev1.emit("eventOnce", 200, "ok"); // passing multiple parameters

////////////////////////////
//Unregister event
/////////////////////////////
ev1.off("eventOnce", cb1);
