DROP DATABASE IF EXISTS songs_db;
CREATE DATABASE songs_db;

USE songs_db;

CREATE TABLE top5000 (
position INT NOT NULL,
artist VARCHAR(100),
song VARCHAR(100),
year INT,
total DECIMAL(10, 4),
us DECIMAL(10, 4),
uk DECIMAL(10, 4),
europe DECIMAL(10, 4),
world DECIMAL(10, 4),
PRIMARY KEY(position)
);