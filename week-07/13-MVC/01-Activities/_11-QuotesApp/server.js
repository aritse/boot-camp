const express = require("express");
const ehb = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", ehb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "quotes_db"
});

conn.connect(err => {
  if (err) throw err;
  console.log("connected to db as id", conn.threadId);
});

app.get("/", (req, res) => {
  conn.query("SELECT * FROM quotes", (err, data) => {
    if (err) return res.status(500).end();
    res.render("index", { quotes: data });
  });
});

app.get("/:id", (req, res) => {
  conn.query("SELECT * FROM quotes WHERE id=?", [req.params.id], (err, data) => {
    if (err) return res.status(500).end();
    res.render("single-quote", data[0]);
  });
});

app.post("/api/quotes", (req, res) => {
  conn.query("INSERT INTO quotes (quote, author) VALUES (?, ?)", [req.body.quote, req.body.author], (err, data) => {
    if (err) return res.status(500).end();
    res.json({ id: data.insertId });
  });
});

app.delete("/api/quotes/:id", (req, res) => {
  conn.query("DELETE FROM quotes WHERE id=?", [req.params.id], (err, data) => {
    if (err) return res.status(500).end();
    if (data.affectedRows === 0) return res.status(404).end();
    res.status(200).end();
  });
});

app.put("/api/quotes/:id", (req, res) => {
  conn.query("UPDATE quotes SET ? WHERE id=?", [{ quote: req.body.quote, author: req.body.author }, req.params.id], (err, data) => {
    if (err) return res.status(500).end();
    if (data.changedRows === 0) return res.status(404).end();
    res.status(200).end();
  });
});

app.listen(PORT, () => console.log("express server listening on http://localhost:" + PORT));
