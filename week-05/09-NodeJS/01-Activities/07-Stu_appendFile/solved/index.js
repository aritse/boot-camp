const fs = require("fs");

const data = process.argv[2];
fs.appendFile("log.txt", data + "\n", function(err) {
  if (err) throw err;
  console.log("success");
});
