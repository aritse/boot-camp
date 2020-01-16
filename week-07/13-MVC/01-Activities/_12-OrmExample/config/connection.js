const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "pets_db"
});

conn.connect(err => {
  if (err) throw err;
  console.log("connected to db as id", conn.threadId);
});

module.exports = conn;
