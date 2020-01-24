DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirp (
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(100) NOT NULL,
  body VARCHAR(300) NOT NULL COLLATE utf8mb4_0900_bin,
  created_at DATETIME NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO chirp (author, body, created_at) VALUES ("Bold Davaa", "Хүн болох багаасаа, хүлэг болох унаганаасаа.", CURRENT_TIMESTAMP);