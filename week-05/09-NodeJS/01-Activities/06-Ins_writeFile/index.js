const fs = require("fs");

// async method doesn't block the execution meaning the later code keeps executing
fs.writeFile("./log.txt", process.argv[2] || process.argv[1], function (error) {
  if (error) throw error;
  console.log("Success!");
});

// following sync method blocks the execution until the method is finished
// fs.writeFileSync("./log.txt", process.argv[2] || process.argv[1]);

console.log("Wrote an arg value or script name to a log file");
