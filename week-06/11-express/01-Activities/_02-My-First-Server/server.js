const randomQuotes = require("random-quotes");
const http = require("http");
const port = 7000;

const server = http.createServer((request, response) => {
  console.log(request.url);
  const quote = randomQuotes.default();
  response.end(quote.body + "\n" + "-" + quote.author);
});

server.listen(port, () => {
  console.log("server listening on", port);
});
