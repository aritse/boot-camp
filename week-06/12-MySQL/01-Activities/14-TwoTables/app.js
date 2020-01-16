const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "top_songs_albums_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id", connection.threadId);
  askQuestions();
});

function askQuestions() {
  inquirer
    .prompt({
      message: "Choose",
      type: "list",
      choices: [
        "get data by artist name",
        "get songs between specific position range",
        "get all artists who appear more than once",
        "get data by song title",
        "get artist whose song and album made chart in the same year",
        "QUIT"
      ],
      name: "choice"
    })
    .then(answers => {
      // console.log(answers);
      switch (answers.choice) {
        case "get data by artist name":
          getArtistData();
          break;

        case "get songs between specific position range":
          getRangedData();
          break;

        case "get all artists who appear more than once":
          getMultiEntryArtistData();
          break;

        case "get data by song title":
          getSongData();
          break;

        case "get artist whose song and album made chart in the same year":
          getJoinedData();
          break;

        default:
          connection.end();
          break;
      }
    });
}

function getArtistData() {
  inquirer
    .prompt({
      type: "input",
      name: "artist",
      message: "who do we search for?"
    })
    .then(function(artistAnswers) {
      console.log("get artist data function");
      connection.query("SELECT * FROM songs WHERE artist = ?", [artistAnswers.artist], function(err, data) {
        if (err) throw err;
        console.table(data);
        askQuestions();
      });
    });
}

function getSongData() {
  inquirer
    .prompt({
      type: "input",
      name: "song",
      message: "which song do we search for?"
    })
    .then(function(songAnswers) {
      console.log("get song data function");
      connection.query("SELECT * FROM songs WHERE song = ?", [songAnswers.song], function(err, data) {
        if (err) throw err;
        console.table(data);
        askQuestions();
      });
    });
}

function getRangedData() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "start",
        message: "which position to start at?"
      },
      {
        type: "number",
        name: "end",
        message: "which position to end at?"
      }
    ])
    .then(function(rangedAnswers) {
      console.log(rangedAnswers);
      connection.query("SELECT * FROM songs WHERE position BETWEEN ? AND ?", [rangedAnswers.start, rangedAnswers.end], function(err, data) {
        if (err) throw err;
        console.table(data);
        askQuestions();
      });
    });
}

function getMultiEntryArtistData() {
  connection.query(" SELECT artist, COUNT(artist) AS count FROM songs GROUP BY artist HAVING count>1 ORDER BY count DESC", function(err, data) {
    if (err) throw err;
    console.table(data);
  });
}

function getJoinedData() {
  inquirer
    .prompt({
      type: "input",
      name: "artist",
      message: "who do we search for?"
    })
    .then(function(artistAnswers) {
      console.log("get both song and album function");
      connection.query(
        'SELECT albums.year, albums.position AS "album rank", songs.position AS "song rank", albums.album, songs.song FROM albums JOIN songs ON albums.artist = songs.artist AND albums.year = songs.year WHERE albums.artist = ?;',
        [artistAnswers.artist],
        function(err, data) {
          console.table(data);
          askQuestions();
        }
      );
    });
}
