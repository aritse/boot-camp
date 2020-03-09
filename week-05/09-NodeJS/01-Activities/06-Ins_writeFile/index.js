const fs = require("fs");

fs.writeFile("./log.txt", process.argv[2] || process.argv[1], function(error) {
  if (error) throw error;
  console.log("Success!");
});

console.log("Wrote an arg value or script name to a log file");
