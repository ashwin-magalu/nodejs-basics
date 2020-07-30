// Functions
/* 
var printstuff1 = function (stuff) {
  console.log(stuff);
};

function printstuff2(stuff) {
  console.log(stuff);
}
printstuff1("Hello ABC");
printstuff2("Hello ABC");

function mainfunction(anotherfunction, value) {
  anotherfunction(value);
}
mainfunction(printstuff, "Hello Ashwin"); //Anonymous function as a parameter to another function
mainfunction(function (stuff) {
  console.log(stuff);
}, "world");
 */

// Global Objects and Timers
/* 
console.log(__filename); //o/p: C:\Users\ashwin\Desktop\NodeJS\app.js
console.log(__dirname); //o/p: C:\Users\ashwin\Desktop\NodeJS

function printstuff() {
  console.log("This was from setTimeout");
}
setTimeout(printstuff, 5000); // works only once

setInterval(printstuff, 2000); // works at set interval
 */

//Callback Function
/* 
//Package Delivery and Restaurant examples for multi use of single thread without wasting time
//console.log("User1, I made a request");
//console.log("Database operation takes 5 sec");
//console.log("Data delivered to the user");
//console.log("User2, I made a request");
//console.log("Database operation takes 5 sec");
//console.log("Data delivered to the user");
//console.log("User3, I made a request");
//console.log("Database operation takes 5 sec");
//console.log("Data delivered to the user");
//sequential execution happens in the above code

function callback() {
  console.log("Queried the DB and delivered data in 5 seconds");
}

console.log("User1, I made a request");
setTimeout(callback, 5000);
console.log("User2, I made a request");
setTimeout(callback, 5000);
console.log("User3, I made a request");
setTimeout(callback, 5000);
 */

//Modules
/* 
var athletics = require("./athletics");
athletics.relay(); //o/p : This is a relay function
athletics.longjump(); //o/p : This is longjump function
 */

//HTTP Module
/* 
var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  })
  .listen(8888); // 8888 is the port number
//This is how we create a http server
 */

//Events
/* 
var events = require("events");
var eventEmitter = new events.EventEmitter();
var ringBell = function () {
  console.log("Ring Ring Ring");
  eventEmitter.emit("bellRings", "Welcome");
};
eventEmitter.on("doorOpen", ringBell);
eventEmitter.on("bellRings", function (message) {
  console.log(message);
});
eventEmitter.emit("doorOpen"); //This statement executes before the eventEmitter.on statement
 */

//fs Module
/* 
var fs = require("fs");
//Asynchronous
fs.readFile("input.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Async data is " + data.toString());
  }
});
//Synchronous
var data = fs.readFileSync("input.txt");
console.log("Sync data is " + data.toString());
console.log("this is the end");

// o/p  Sync data is This is the Input file, Just a dummy file
//      this is the end
//      Async data is This is the Input file, Just a dummy file
 */

//Streams: These are unique pipes, that allow us to read data from a source and pipe the data to destination easily
//There are three types of Streams: readable, writable and one more
/* 
var fs = require("fs");
var readableStream = fs.createReadStream("input.txt");
var data = "";
readableStream.setEncoding("UTF8");
readableStream.on("data", function (chunk) {
  data += chunk; //reading happens in chunks and not all together once
});
readableStream.on("end", function () {
  console.log(data);
});

var writeData = "Hello World";
var writableStream = fs.createWriteStream("output.txt"); // this creates this file
writableStream.write(writeData, "UTF8");
writableStream.end();
writableStream.on("finish", function () {
  console.log("Write Completed");
});
 */

//Pipes : piping is a mechanism, through which we can read data from a source and write to a destination
/* 
var fs = require("fs");
var readableStream = fs.createReadStream("input.txt");
var writableStream = fs.createWriteStream("output.txt");
readableStream.pipe(writableStream); // Writes everyting in input.txt to output.txt
 */

