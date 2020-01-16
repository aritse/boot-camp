const express = require("express");
const mysql = require("mysql");
const handlebars = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "wishes_db"
});

connection.connect(() => console.log("database connected as", connection.threadId));

app.get("/", (req, res) => {
  connection.query("SELECT * FROM wish", (err, wishes) => res.render("index", { wishes: wishes }));
});

app.post("/", (req, res) => {
  connection.query("INSERT INTO wish (wish) VALUES ('" + req.body.make_wish + "')", (err, data) => res.redirect("/"));
});

app.listen(PORT, () => console.log("express server listening on http://localhost:" + PORT));
