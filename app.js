const readline = require("readline");
const fs = require("fs");
const http = require("http");

// ------ how to take input from user/terminal and show in terminal ------

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("enter your name:", (name) => {
//   console.log(`you entered : ${name}`);
//   rl.close();
// });
// rl.on("close", () => {
//   console.log("interface has been closed");
//   process.exit(0);
// });

// ------ How To read and write files Synchronously in Node.js ------

// let text = fs.readFileSync('./Files/input.txt','utf-8');
// console.log(text);

// fs.writeFileSync('./Files/output.txt',`these are the content which I am going to write at \n ${new Date}`);

// ------ How To read and write files Asynchronously in Node.js ------

// fs.readFile(`./Files/start.txt`, "utf-8", (error1, data1) => {
//   console.log(data1);
//   fs.readFile(`./Files/${data1}.txt`, "utf-8", (error2, data2) => {
//     console.log(data2);
//     fs.readFile("./Files/append.txt", "utf-8", (error3, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./Files/output.txt",
//         `this is what i am going to write in the output.txt file by appending data2 and data3 files ${data2} ${data3} at \n ${new Date()}`,
//         () => {
//           console.log("written successfully");
//         }
//       );
//     });
//   });
// });

// ------ Creating a Simple Server in Node.js ------

// Step 1 : Create a Server
const server = http.createServer((request, response) => {
  response.end("hello from the server!");
  console.log("a new request received");
  console.log(response);
});

// Step 2 : Start the Server
server.listen("8000", "127.0.0.1", () => {
  console.log("server has started!");
});
