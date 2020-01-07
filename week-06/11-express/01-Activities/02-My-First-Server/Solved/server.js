//importing our http module
const http = require("http");
//where to listen for requests
const port = 7000;

const quotes = ["Use the force harry -- Jean-Luc Picard","Never punch a gift horse in the mouth", "Coding if fun!!"];

function handleRequest(req,res){
    const randQuoteIdx = Math.floor(Math.random()*quotes.length);
    res.end(quotes[randQuoteIdx]);
}

const server = http.createServer(handleRequest);


server.listen(port,function(){
    console.log(`server is running!`);
})