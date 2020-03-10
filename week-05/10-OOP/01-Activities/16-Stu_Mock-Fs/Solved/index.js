const FileIO = require("./fileIO");

const fileIO = new FileIO();

fileIO.write("messages.txt", "Hello World!");

const message = fileIO.read("messages.txt");

console.log(message);
