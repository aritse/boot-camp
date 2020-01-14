const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "songs_db"
});

connection.connect(error => {
  if (error) throw error;
  console.log("connected as id", connection.threadId);
  askQuestions();
});

function askQuestions() {
  inquirer
    .prompt([
      {
        message: "Choices",
        type: "list",
        name: "choice",
        choices: [
          "all data for songs sung by a specific artist",
          "all artists who appear more than once",
          "all data contained within a specific range",
          "search and return a specific song",
          "quit"
        ]
      }
    ])
    .then(answers => {
      switch ({ choice }) {
        case "all data for songs sung by a specific artist":
          get;
          break;
        case "all artists who appear more than once":
          get;
          break;
        case "all data contained within a specific range":
          break;
        case "search and return a specific song":
          break;
        default:
          break;
      }
    })
    .catch();
}

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

TopLoveSongsInTheWorld = genre => {
  // SELECT MIN(total), MAX(total) FROM top5000;
  const query = "SELECT * FROM top5000 WHERE song LIKE '%love%' ORDER BY total DESC;";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
SongsByEminem = genre => {
  // SELECT MIN(total), MAX(total) FROM top5000;
  const query = "SELECT * FROM top5000 WHERE artist='Eminem';";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
ArtistsMoreThanOne = genre => {
  const query = "SELECT artist, COUNT(*) AS times  FROM top5000 GROUP BY artist HAVING COUNT(*) > 1 ORDER BY times DESC;";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
TopWorldSongs = genre => {
  const query = "SELECT * FROM top5000 WHERE world BETWEEN 3 AND 4.46 ORDER BY world DESC;";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
};
