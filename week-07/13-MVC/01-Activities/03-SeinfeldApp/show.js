const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "shows"
});

connection.connect(err => {
  if (err) throw err;
  console.log("db server connected as", connection.threadId);
});

function populateDB() {
  connection.query("TRUNCATE actors", err => {
    if (err) throw err;
    console.log("Truncated actors");
  });

  const names = [
    "Jerry Seinfeld",
    "Kramer",
    "George Costanza ",
    "Elaine Benes",
    "Ruthie Cohen",
    "Newman",
    "Man on Sidewalk",
    "Susan Ross",
    "Estelle Constanza",
    "Frank Costanza"
  ];

  const attitudes = ["Pessimistic", "Manipulative", "Optimistic", "Funny", "Selfish"];

  names.forEach(name => {
    const coolness = (Math.random() * 10) | 0;
    const attitude = attitudes[((Math.random() * 10) | 0) % attitudes.length];

    connection.query(
      "INSERT INTO actors SET ?",
      {
        name: name,
        coolness: coolness,
        attitude: attitude
      },
      err => {
        if (err) throw err;
      }
    );
  });
}

// populateDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/cast", (req, res) => {
  connection.query("SELECT * FROM actors", function(err, result) {
    if (err) throw err;
    var html = "<h1>Actors</h1>";
    html += "<ul>";
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<li><p> Name: " + result[i].name + "</p>";
      html += "<li><p> Coolness: " + result[i].coolness + "</p>";
      html += "<li><p> Attitude: " + result[i].attitude + "</p></li>";
    }
    html += "</ul>";
    res.send(html);
  });
});

app.get("/coolness-chart", (req, res) => {
  connection.query("SELECT * FROM actors ORDER BY coolness DESC", function(err, result) {
    if (err) throw err;
    var html = "<h1>Actors sorted by their coolness points</h1>";
    html += "<ul>";
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<li><p> Name: " + result[i].name + "</p>";
      html += "<li><p> Coolness: " + result[i].coolness + "</p>";
      html += "<li><p> Attitude: " + result[i].attitude + "</p></li>";
    }
    html += "</ul>";
    res.send(html);
  });
});

app.get("/attitude-chart/:att", (req, res) => {
  const attitude = req.params.att;
  connection.query(`SELECT * FROM actors WHERE attitude = "${attitude}"`, function(err, result) {
    if (err) throw err;
    var html = `<h1>${attitude} Actors</h1>`;
    html += "<ul>";
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<li><p> Name: " + result[i].name + "</p>";
      html += "<li><p> Coolness: " + result[i].coolness + "</p>";
      html += "<li><p> Attitude: " + result[i].attitude + "</p></li>";
    }
    html += "</ul>";
    res.send(html);
  });
});

app.listen(PORT, () => console.log("express server listening on", PORT));
