const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.listen(8000, "127.0.0.1", () => {
  console.log("serverr has started!");
});

// L-29 Event Loop Code Practice
console.log("program has started");

//STORED IN PHASE - 2
fs.readFile("./Files/input.txt", "utf-8", (err, data) => {
  console.log("readFile has completed");

  //STORED IN PHASE - 1
  setTimeout(() => {
    console.log("setTimeout has executed");
  }, [0]);

  //STORED IN PHASE - 3
  setImmediate(() => {
    console.log("setImmediate has executed!");
  });

  process.nextTick(() => {
    console.log("process.nextTick has executed");
  });
});

console.log("program has completed");
