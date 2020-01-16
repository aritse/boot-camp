const express = require("express");
const ehb = require("express-handlebars");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", ehb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "day_planner_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected to db as id", connection.threadId);
});

// Use Handlebars to render the main index.html page with the plans in it.
app.get("/", (req, res) => {
  connection.query("SELECT * FROM plans;", (err, data) => {
    if (err) return res.status(500).end();
    res.render("index", { plans: data });
  });
});

// Create a new plan
app.post("/api/plans", (req, res) => {
  connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], (err, result) => {
    if (err) return res.status(500).end();
    // Send back the ID of the new plan
    res.json({ id: result.insertId });
  });
});

// Update a plan
app.put("/api/plans/:id", (req, res) => {
  connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], (err, result) => {
    if (err) return res.status(500).end();
    else if (result.changedRows === 0) return res.status(404).end();
    else res.status(200).end();
  });
});

// Delete a plan
app.delete("/api/plans/:id", (req, res) => {
  connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).end();
    else if (result.affectedRows === 0) return res.status(404).end();
    else res.status(200).end();
  });
});

app.listen(PORT, () => console.log("express server listening on http://localhost:" + PORT));
