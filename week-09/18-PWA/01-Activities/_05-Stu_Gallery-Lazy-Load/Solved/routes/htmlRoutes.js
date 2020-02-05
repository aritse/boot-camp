const path = require("path");

module.exports = function(app) {
  app.get("*", function(req, res) {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, "public/index.html"));
=======
    res.sendFile(path.join(__dirname, "../public/index.html"));
>>>>>>> upstream/master
  });
};
