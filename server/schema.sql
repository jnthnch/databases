/* Create other tables and define schemas for them here! */
DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  room_id INT,
  text VARCHAR(140) NULL DEFAULT NULL
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(20) NOT NULL
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(20) NOT NULL
);

ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`) ON DELETE CASCADE;

-- OPEN NOTE: may need to add a friends table

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/