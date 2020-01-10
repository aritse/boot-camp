const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "playlist_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id", connection.threadId);
  afterConnection();
});

const genre = "Rock";
const artist = "U2";

afterConnection = () => {
  connection.query("SELECT * FROM songs", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  connection.query(`SELECT * FROM songs WHERE genre=?`, [genre], (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  connection.query(`SELECT * FROM songs WHERE artist=?`, [artist], (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  connection.end();
};
