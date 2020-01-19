const http = require("http");
const PORT = 8080;
const server = http.createServer(reqListener);

function reqListener(req, res) {
  let request = "";
  req.on("data", data => (request += data));
  req.on("end", () => {
    console.log("You did", req.method, " with", request);
    res.end();
  });
}

server.listen(PORT, () => console.log("http server listening on", PORT));
