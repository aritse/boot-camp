const express = require("express");
const handlebars = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "task_saver_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected to DB as id", connection.threadId);
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM tasks", (err, data) => {
    if (err) throw err;
    res.render("index", { tasks: data });
  });
});

// Post route redirects back to home
app.post("/", (req, res) => {
  // console.log('You sent, ' + req.body.task);
  // return res.send('You sent, ' + req.body.task);

  // When using the MySQL package, we'd use ?s in place of any values to be inserted,
  // which are then swapped out with corresponding elements in the array.
  // This helps us avoid an exploit known as SQL injection which we'd be open to
  // if we used string concatenation - https://en.wikipedia.org/wiki/SQL_injection
  connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(PORT, () => console.log("express server listening on: http://localhost:" + PORT));
