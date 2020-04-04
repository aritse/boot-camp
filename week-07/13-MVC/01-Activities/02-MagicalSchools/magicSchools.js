const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "wizard_schools_db",
});

connection.connect((err) => {
  if (err) throw `error connecting: ${err.stack}`;
  console.log(`connected as id ${connection.threadId}`);
});

// Routes
app.get("/", (req, res) => {
  // If the main route is hit, then we initiate a SQL query to grab all records
  // All of the resulting records are stored in the variable "records"
  connection.query("SELECT * FROM schools", (err, records) => {
    if (err) throw err;

    // We then begin building out HTML elements for the page.
    let html = "<h1> Magical Schools </h1>";
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    records.forEach((record) => {
      html += `
      <li>
        <p> ID: ${record.id} </p>
        <p> School: " ${record.name} </p>
      </li>
      `;
    });

    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created
    res.send(html);
  });
});

app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
