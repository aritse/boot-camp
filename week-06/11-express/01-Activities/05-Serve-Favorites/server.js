const http = require("http");
const fs = require("fs");

const port = 8080;
const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  switch (req.url) {
    case "/":
      return serve(res, "index.html");
    case "/foods":
      return serve(res, "foods.html");
    case "/movies":
      return serve(res, "movies.html");
    case "/frameworks":
      return serve(res, "frameworks.html");
    default:
      return serve(res);
  }
}

function serve(res, file) {
  if (file) {
    fs.readFile(__dirname + "\\views\\" + file, (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    const myHTML = "<html>" + "<body><h1>404 Not Found </h1>" + "<p>The page you were looking for can not be found</p>" + "</body></html>";
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
  }
}

server.listen(port, () => console.log("Server is listening on PORT: " + port));
