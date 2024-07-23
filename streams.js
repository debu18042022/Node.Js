const fs = require("fs");
const http = require("http");

// STEP-1 create Server
const server = http.createServer();

// STEP-2 Start Server

server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started");
});

// // SOLUTION:1 without using readable and writeable stream
// server.on("request", (req, res) => {
//   fs.readFile("./Files/large-file.txt", "utf-8", (err, data) => {
//     // console.log(data);
//     if (err) {
//       res.end("something went wrong!");
//       return;
//     }
//     res.end(data);
//   });
// });

// // SOLUTION:2 using readable and writeable stream

// server.on("request", (req, res) => {
//   let rs = fs.createReadStream("./Files/large-file.txt");

//   rs.on("data", (chunk) => {
//     console.log(chunk);
//     res.write(chunk);
//   });

//   res.on("end", () => {
//     res.end();
//   });

//   rs.on("error", (error) => {
//     res.end(error);
//   });

//   res.end();
// });

// SOLUTION:3 using pipe method basically to solve the problem of back pressure which was occuring in the solution 2 code

server.on('request',(req,res)=>{
    let rs = fs.createReadStream('./Files/large-file.txt');
    rs.pipe(res)
});
