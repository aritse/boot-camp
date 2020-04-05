const fs = require("fs");

function writeFileAsyncPromise(path, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, data, function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
}

// A bit shorter
const writeFileAsync = (path, data, encoding) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, encoding, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

writeFileAsyncPromise("example.txt", "Hello Promise!", "utf8")
  .then(() => console.log("success"))
  .catch((err) => console.log(err));

// function readFileAsync(path, encoding) {
//   return new Promise(function(resolve, reject) {
//     fs.readFile(path, encoding, function(err, data) {
//       if (err) {
//         return reject(err);
//       }
//       resolve(data);
//     });
//   });
// }

// // A bit shorter
const readFileAsync = (path, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

readFileAsync("example.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
