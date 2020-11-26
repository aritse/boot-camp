const http = require("http");
const PORT = 8080;
const server = http.createServer(handleRequest);
const fs = require("fs");

const handleRequest = (req, res) => {
  let request = "";
  req.on("data", data => {
    console.log("calling");

    request += data;
    console.log("request", request);

    if (req.url === "/") {
      fs.readFile(__dirname + "/index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url === "/name") {
      req.on("data", data => (request += data));
      req.on("end", () => {
        console.log("You did a", req.method, "with the data:\n", request);
        res.end();
      });
    }
  });
};

server.listen(PORT, () => console.log("http server listening on", PORT));
