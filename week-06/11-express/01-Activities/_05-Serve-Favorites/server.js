const http = require("http");
const fs = require("fs");

const port = 8080;
const server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(request, response) {
  switch (request.url) {
    case "/":
      serve(response, "index.html");
      break;
    case "/foods":
      serve(response, "foods.html");
      break;
    case "/movies":
      serve(response, "movies.html");
      break;
    case "/frameworks":
      serve(response, "frameworks.html");
      break;
    default:
      serve(response);
      break;
  }
}

function serve(res, fileName) {
  if (fileName) {
    fs.readFile(__dirname + "\\views\\" + fileName, function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    var myHTML = "<html>" + "<body><h1>404 Not Found </h1>" + "<p>The page you were looking for can not be found</p>" + "</body></html>";
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
  }
}

// Starts our server
server.listen(port, function() {
  console.log("Server is listening on PORT: " + port);
});
