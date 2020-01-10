DROP DATABASE IF EXISTS programming_db;
CREATE DATABASE programming_db;
use programming_db;
CREATE TABLE programming_languages(
  id integer(10) NOT NULL AUTO_INCREMENT,
  language VARCHAR(20),
  rating INTEGER(10),
  mastered BOOLEAN DEFAULT true,
  PRIMARY KEY(id)
);

INSERT INTO programming_languages (language, rating, mastered) VALUES ("C", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("C", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("C#", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("Python", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("JavaScript", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("C++", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("Perl", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("CMD", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("PowerShell", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("R", 5, false); 
INSERT INTO programming_languages (language, rating, mastered) VALUES ("Ruby", 5, false); 

SELECT * FROM programming_languages;
DELETE FROM programming_languages WHERE id=7;
SELECT * FROM programming_languages WHERE language LIKE 'C%';