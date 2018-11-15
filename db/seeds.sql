-- seeds for user table

select *
from user
order by userID;

INSERT INTO user
  (userName, email)
VALUES
  ("Shaoming", "noemailShaoming@email.com");
INSERT INTO user
  (userName, email)
VALUES
  ("Anthony", "noemailAnthony@email.com");
INSERT INTO user
  (userName, email)
VALUES
  ("Rene", "noemailRene@email.com");
INSERT INTO user
  (userName, email)
VALUES
  ("Parth", "noemailParth@email.com");
INSERT INTO user
  (userName, email)
VALUES
  ("Randall", "noemailRandall@email.com");
INSERT INTO user
  (userName, email)
VALUES
  ("Ali", "noemailAli@email.com");

UPDATE user SET userName="Parth007", email="noemailParth@email.com" WHERE email="noemailParth@email.com";
delete from user where email = "noemailAli@email.com";

-- seeds for coins table

select *
from coins
order by id;
select *
from coins
where Symbol = "BTC";
select *
from products
where CoinName = "Bitcoin";

INSERT INTO coins
  (ImageUrl, Symbol, CoinName)
VALUES
  ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDIeSesLE8lDJVqlTThug8zOD2vIcWwMjcWc0W202TJF3pBp2", "BTCNew", "Bitcoin New");

UPDATE coins SET ImageUrl="", Symbol="BTCNewer", CoinName="Bitcoin Newer" WHERE id=1;
UPDATE coins SET Symbol="BTCNewer", CoinName="Bitcoin Newer" WHERE id=1;

delete from coins where id = 1;

-- seeds for userCoins table

select *
from userCoins
order by id;