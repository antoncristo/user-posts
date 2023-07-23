CREATE DATABASE users_posts;

CREATE TABLE `users_posts`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `users_posts`.`posts` (
  `id` INT NOT NULL,
  `userId` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`,`userId`));
