var express = require("express");
var mongoose = require("mongoose");

var app = express();
<<<<<<< HEAD
var PORT = process.env.PORT || 3000;
=======
var PORT = process.env.PORT || 3001;
>>>>>>> upstream/master

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
