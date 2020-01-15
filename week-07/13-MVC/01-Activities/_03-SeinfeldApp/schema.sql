DROP DATABASE IF EXISTS seinfeld;
CREATE DATABASE seinfeld;
USE seinfeld;

CREATE TABLE actor (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  coolness INT NOT NULL,
  attitude VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- INSERT INTO actors (name, coolness, attitude) VALUES ("A", 1, "X");
-- INSERT INTO actors (name, coolness, attitude) VALUES ("B", 2, "Y");
-- INSERT INTO actors (name, coolness, attitude) VALUES ("C", 3, "Z");
