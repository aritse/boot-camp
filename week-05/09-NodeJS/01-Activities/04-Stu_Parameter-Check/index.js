if (process.argv.length === 4) {
  console.log(process.argv[2] === process.argv[3]);
} else {
  console.error("Please provide 2 arguments");
}
