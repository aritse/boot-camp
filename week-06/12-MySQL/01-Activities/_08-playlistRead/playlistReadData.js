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
  insertSong();
  readSongs();
  updateSong();
  deleteSong();
  connection.end();
});

insertSong = () => {
  console.log("Inserting a song...");
  const query = connection.query(
    "INSERT INTO songs SET ?",
    [
      {
        title: "titleB",
        artist: "artistB",
        genre: "genreB"
      }
    ],
    (err, res) => {
      console.log(query.sql);
      if (err) throw err;
      console.log(res.affectedRows, "song inserted");
    }
  );
};

readSongs = () => {
  console.log("Reading songs...");
  const query = connection.query(
    "SELECT * FROM songs WHERE ?",
    [
      {
        artist: "U2"
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  );
  console.log(query.sql);
};

updateSong = () => {
  console.log("Updating a song...");
  const query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        title: "titleC",
        artist: "artistC",
        genre: "genreC"
      },
      {
        id: 13
      }
    ],
    (err, res) => {
      console.log(query.sql);
      if (err) throw err;
      console.log(res.affectedRows, "song inserted");
    }
  );
};

deleteSong = () => {
  console.log("Deleting a song...");
  const query = connection.query(
    "DELETE FROM songs WHERE ?",
    [
      {
        title: "titleC"
      }
    ],
    (err, res) => {
      console.log(query.sql);
      if (err) throw err;
      console.log(res);
    }
  );
};

const genre = "Rock";
const artist = "U2";

getFavGenre = genre => {
  connection.query(`SELECT * FROM songs WHERE genre=?`, [genre], (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};

getFavArtist = artise => {
  connection.query(`SELECT * FROM songs WHERE artist=?`, [artist], (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
