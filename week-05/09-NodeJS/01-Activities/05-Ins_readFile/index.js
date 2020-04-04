// fs is a package in Node standard library for reading and writing files
const fs = require("fs");

// return the content of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("./data.csv", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

// readFileSync returns the data read synchronously meaning it blocks the execution until the method comes back
// console.log(fs.readFileSync("./data.csv", "utf8"));

console.log("This line prints first even though it is after readFile() because readFile() is an async function.");
