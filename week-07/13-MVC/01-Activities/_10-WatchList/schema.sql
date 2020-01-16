DROP DATABASE IF EXISTS movie_planner_db;
CREATE DATABASE movie_planner_db;
USE movie_planner_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    film VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO movies (film) VALUES ('Matrix');
INSERT INTO movies (film) VALUES ('Inception');
