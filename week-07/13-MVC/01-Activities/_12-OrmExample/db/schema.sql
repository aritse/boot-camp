DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;
USE pets_db;

CREATE TABLE buyers (
	id INT NOT NULL AUTO_INCREMENT,
	buyer_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE pets (
	id INT NOT NULL AUTO_INCREMENT,
	animal_breed VARCHAR(255) NOT NULL,
	animal_name VARCHAR(255) NOT NULL,
	price INT NOT NULL,
	buyer_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (buyer_id) REFERENCES buyers(id)
);
