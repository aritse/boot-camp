const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "seinfeld"
});

connection.connect(err => {
  if (err) throw err;
  console.log("db server connected as", connection.threadId);
  // populateDB();
});

function populateDB() {
  // Empty actor table
  connection.query("TRUNCATE actor", err => {
    if (err) throw err;
    console.log("Truncated actor table");
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
    const coolness = (Math.random() * 10) | 0; // random number between 0 and 10
    const index = ((Math.random() * 10) | 0) % attitudes.length; // random index

    connection.query(
      "INSERT INTO actor SET ?",
      {
        name: name,
        coolness: coolness,
        attitude: attitudes[index]
      },
      err => {
        if (err) throw err;
      }
    );
  });
}

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/cast", (req, res) => {
  connection.query("SELECT * FROM actor", (err, records) => {
    if (err) throw err;
    let html = "<h1> Actors </h1>";
    html += "<ul>";
    records.forEach(record => {
      html += "<li><p> ID: " + record.id + "</p>";
      html += "<li><p> Name: " + record.name + "</p>";
      html += "<li><p> Coolness: " + record.coolness + "</p>";
      html += "<li><p> Attitude: " + record.attitude + "</p></li>";
    });
    html += "</ul>";
    res.send(html);
  });
});

app.get("/coolness-chart", (req, res) => {
  connection.query("SELECT * FROM actor ORDER BY coolness DESC", (err, records) => {
    if (err) throw err;
    let html = "<h1>Actors sorted by their coolness points</h1>";
    html += "<ul>";
    records.forEach(record => {
      html += "<li><p> ID: " + record.id + "</p>";
      html += "<li><p> Name: " + record.name + "</p>";
      html += "<li><p> Coolness: " + record.coolness + "</p>";
      html += "<li><p> Attitude: " + record.attitude + "</p></li>";
    });
    html += "</ul>";
    res.send(html);
  });
});

app.get("/attitude-chart/:att", (req, res) => {
  const attitude = req.params.att;
  connection.query(`SELECT * FROM actor WHERE attitude = "${attitude}"`, (err, records) => {
    if (err) throw err;
    let html = `<h1>${attitude} Actors</h1>`;
    html += "<ul>";
    records.forEach(record => {
      html += "<li><p> ID: " + record.id + "</p>";
      html += "<li><p> Name: " + record.name + "</p>";
      html += "<li><p> Coolness: " + record.coolness + "</p></li>";
    });
    html += "</ul>";
    res.send(html);
  });
});

app.listen(PORT, () => console.log("express server listening on http://localhost:" + PORT));
