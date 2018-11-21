-- Creating user table
DROP DATABASE IF EXISTS sharprdb;
CREATE DATABASE sharprdb;

USE sharprdb;

CREATE TABLE user
(
  userID mediumint
  auto_increment,
userName VARCHAR
  (255) NOT NULL,
email VARCHAR
  (255) NOT NULL,
key
  (userID),
primary key
  (email)
);

  -- Creating coins table

  CREATE TABLE coins
  (
    id MEDIUMINT
    AUTO_INCREMENT NOT NULL,
ImageUrl VARCHAR
    (2000) NOT NULL,
Symbol VARCHAR
    (100) NOT NULL, 
CoinName varchar
    (50) NOT NULL,
key
    (id),
primary key
    (Symbol)
);

    -- Creating userCoins table

    CREATE TABLE userCoins
    (
      id MEDIUMINT
      AUTO_INCREMENT NOT NULL,
Symbol VARCHAR
      (100) NOT NULL,
email VARCHAR
      (255) NOT NULL,
primary key
      (id),
constraint fk_email foreign key
      (email) references user
      (email) on
      delete cascade on
      update cascade,
constraint fk_Symbol foreign key
      (Symbol) references coins
      (Symbol) on
      delete cascade on
      update cascade
);
