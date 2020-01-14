const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as ", connection.threadId);

  connection.query("DROP DATABASE IF EXISTS quiz_db", (err, res) => {
    if (err) throw err;
    console.table("dropped db");
  });

  connection.query("CREATE DATABASE quiz_db", (err, res) => {
    if (err) throw err;
    console.table("created db");
  });

  connection.query("USE quiz_db");

  connection.query(`CREATE TABLE question (id INT AUTO_INCREMENT NOT NULL, text VARCHAR(200) NOT NULL, PRIMARY KEY(id))`, (err, res) => {
    if (err) throw err;
    console.table("created table");
  });

  for (let i = 0; i < 3; i++) {
    const t = "string" + i;
    connection.query(`INSERT INTO question (text) VALUES ('${t}')`, (err, res) => {
      if (err) throw err;
      console.table("inserted", i);
    });
  }
  connection.end();
});
