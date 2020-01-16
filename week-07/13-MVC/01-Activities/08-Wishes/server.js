const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
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
  const myWish = req.body.makeWish;
  console.log(myWish);

  connection.query("INSERT INTO wish (wish) VALUES ('" + myWish + "')", (err, data) => res.redirect("/"));
});

app.listen(PORT, () => console.log("express server listening on http://localhost:" + PORT));
