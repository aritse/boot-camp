var fs = require("fs");

const line = process.argv[2];
// we add a newline character to the command line argument
fs.appendFile("log.txt", line + "\n", function(err) {
  if (err) console.log(err);
  else console.log("Commit logged!");
});
