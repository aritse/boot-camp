const fs = require("fs");

if (process.argv.length === 3) {
  fs.appendFile("./log.txt", process.argv[2] + "\n", error => {
    if (error) throw error;
    console.log("Success!");
  });
} else {
  console.error("Please provide an argument");
}
