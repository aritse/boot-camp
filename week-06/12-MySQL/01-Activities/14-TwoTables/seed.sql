DROP DATABASE IF EXISTS top_db;
CREATE DATABASE top_db;
USE top_db;

CREATE TABLE songs(
position INT NOT NULL,
artist VARCHAR(100),
song VARCHAR(100),
year INT,
raw_total DECIMAL(10,4),
raw_us DECIMAL(10,4),
raw_uk DECIMAL(10,4),
raw_europe DECIMAL(10,4),
raw_world DECIMAL(10,4),
PRIMARY KEY(position)
);

CREATE TABLE albums (
position INT NOT NULL,
artist VARCHAR(100),
album VARCHAR(100),
year INT,
raw_total DECIMAL(10,4),
raw_us DECIMAL(10,4),
raw_uk DECIMAL(10,4),
raw_europe DECIMAL(10,4),
raw_world DECIMAL(10,4),
PRIMARY KEY(position)
);

