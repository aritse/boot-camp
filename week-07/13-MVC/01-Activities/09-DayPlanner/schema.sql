DROP DATABASE IF EXISTS day_planner_db;
CREATE DATABASE day_planner_db;
USE day_planner_db;

CREATE TABLE plans (
  id INT NOT NULL AUTO_INCREMENT,
  plan VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO plans (plan) VALUES ('Plan to fight a ninja');
