
// how to take input from user/terminal and show in terminal

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("enter your name:", (name) => {
  console.log(`you entered : ${name}`);
  rl.close();
});
rl.on("close", () => {
  console.log("interface has been closed");
  process.exit(0);
});


