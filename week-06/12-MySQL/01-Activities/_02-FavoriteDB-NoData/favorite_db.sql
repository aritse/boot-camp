DROP DATABASE IF EXISTS favorite_db;
CREATE DATABASE favorite_db;
CREATE TABLE favorite_foods (
  food VARCHAR(50) NOT NULL,
  score INTEGER
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  movie VARCHAR(100) NOT NULL,
  five_times BOOLEAN,
  score INTEGER,
  primary key (ID)
);

