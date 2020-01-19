const http = require("http");
const PORT = 3000;
const server = http.createServer(handleRequest); // create server
server.listen(PORT, () => console.log("http server listening on", PORT)); // start server

function handleRequest(req, res) {
  // save the request data as a variable
  let request = "";
  // When the server receives data...
  req.on("data", data => (request += data));
  // When the request has ended...
  req.on("end", () => {
    // Log the request method and the data received
    console.log("You did a", req.method, "with the data:\n", request);
    res.end();
  });
}
