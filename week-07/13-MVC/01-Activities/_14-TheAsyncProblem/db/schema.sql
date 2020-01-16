DROP DATABASE IF EXISTS parties_db;
CREATE DATABASE parties_db;
USE parties_db;

CREATE TABLE clients (
	id INT NOT NULL AUTO_INCREMENT,
	client_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE parties (
	id INT NOT NULL AUTO_INCREMENT,
	party_name varchar(255) NOT NULL,
	party_type varchar(255) NOT NULL,
	party_cost INT NOT NULL,
	client_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);
