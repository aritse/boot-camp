const TV = require("./tv");

if (process.argv.length > 3) {
  // Create a new TV object
  const tv = new TV();
  // Grab search command line argument
  let search = process.argv[2];
  // Joining the remaining arguments since an actor or tv show name may contain spaces
  let term = process.argv.slice(3).join(" ");
  // By default, if no search type is provided, search for a tv show
  if (!search) search = "show";
  // By default, if no search term is provided, search for "Andy Griffith"
  if (!term) term = "Andy Griffith";
  // Print whether searching for a show or actor, print the term as well
  search === "show" ? tv.findShow(term) : tv.findActor(term);
} else {
  console.log("Syntax: node cli.js show <show name>");
  console.log("Syntax: node cli.js actor <actor name>");
}
