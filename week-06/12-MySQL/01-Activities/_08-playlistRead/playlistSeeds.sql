DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;
USE playlist_db;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    artist VARCHAR(50),
    genre VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre) VALUES ("With or Without You", "U2", "Rock");
INSERT INTO songs (title, artist, genre) VALUES ("Yellow", "Coldplay", "Rock");
INSERT INTO songs (title, artist, genre) VALUES ("Perfect", "Ed Sheeran", "Rock");
INSERT INTO songs (title, artist, genre) VALUES ("Where the Streets Have no Name", "U2", "Rock");
INSERT INTO songs (title, artist, genre) VALUES ("I'll be There", "Michael Jackson", "Rock");
INSERT INTO songs (title, artist, genre) VALUES ("Mambo No. 5", "Lou Bega", "Rock");
INSERT INTO songs (title, artist, genre) VALUES ("November Rain", "Guns n Roses", "Rock");

