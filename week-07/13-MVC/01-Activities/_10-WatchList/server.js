const express = require("express");
const ehb = require("express-handlebars");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", ehb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "movie_planner_db"
});

conn.connect(err => {
  if (err) throw err;
  console.log("connected to database server as id", conn.threadId);
});

app.get("/", (req, res) => {
  conn.query("SELECT * FROM movies;", (err, data) => {
    if (err) return res.status(500).end();
    res.render("index", { films: data });
  });
});

app.post("/api/movies", (req, res) => {
  conn.query("INSERT INTO movies (film) VALUES (?)", [req.body.film], (err, result) => {
    if (err) return res.status(500).end();
    res.json({ id: result.insertId });
  });
});

app.put("/api/movies/:id", (req, res) => {
  conn.query("UPDATE movies SET film = ? WHERE id = ?", [req.body.film, req.params.id], (err, result) => {
    if (err) return res.status(500).end();
    if (result.changedRows === 0) return res.status(404).end();
    res.status(200).end();
  });
});

app.delete("/api/movies/:id", (req, res) => {
  conn.query("DELETE FROM movies WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).end();
    if (result.affectedRows === 0) return res.status(404).end();
    res.status(200).end();
  });
});

app.listen(PORT, () => console.log("express server listening on http://localhost:" + PORT));
