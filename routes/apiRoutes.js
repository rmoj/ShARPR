var connection = require("../config/connection.js");
var express = require("express");
var server = express.Router();

// Get all Coins - Working!!!
server.get("/coins", function(req, res) {
  // res.render("createAccount.html", { qs: req.query });

  if (!req.body) return res.sendStatus(400);
  // res.send("welcome, " + req.body.firstName);

  var queryString = "SELECT * FROM coins order by id limit 0,1200";

  connection.query(queryString, function(err, result) {
    if (err) {
      console.log(err);
      throw err;
    }
    // console.log("Coins Available!", result);
    res.json(result);
    res.end();
  });
});

// Create a new user - Working!!!
server.post("/coins/createUser/", function(req, res) {
  // console.log(req);
  // res.render("createAccount.html", { qs: req.query });

  // if (!req.body) return res.sendStatus(400);
  // res.send("welcome, " + req.body.firstName);

  var queryString =
    'INSERT INTO user (userName, email) VALUES ("' +
    req.body.userName +
    '", "' +
    req.body.email +
    '")';

  // var queryString = "INSERT INTO user (userName, email) VALUES (?,?)";
  // [req.body.userName, req.body.email]

  connection.query(queryString, function(err, result) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("User Successfully Added!", result);
    // res.json(result);
    console.log(req.body.userName);
    // res.redirect("/");
    res.end(JSON.stringify(req.body));
  });
});

// GET particular Coins Details - Working!!!
server.get("/coins/:id", function(req, res) {
  var coinId = req.params.id;

  var queryString = "SELECT * FROM coins WHERE id=" + coinId + ";";

  connection.query(queryString, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// Add a new Coin - Working!!!
server.post("/coins/addCoin/", function(req, res) {
  if (!req.body) return res.sendStatus(400);

  var queryString =
    "INSERT INTO coins (ImageUrl, Symbol, CoinName) VALUES (?,?,?)";

  connection.query(
    queryString,
    [req.body.ImageUrl, req.body.Symbol, req.body.CoinName],
    function(err, result) {
      if (err) throw err;
      // console.log("Coin Successfully Added!", result);
      res.redirect("/");
      res.end();
    }
  );
});

// UPDATE/Edit Coin - Working!!!
server.post("/coins/id/:id", function(req, res) {
  if (!req.body) return res.sendStatus(400);

  var queryString =
    "UPDATE coins SET ImageUrl=?, Symbol=?, CoinName=? WHERE id=?";

  connection.query(
    queryString,
    [req.body.ImageUrl, req.body.Symbol, req.body.CoinName, req.params.id],
    function(err, result) {
      if (err) throw err;
      // console.log("Coin Successfully Updated!", result);
      // res.redirect("/");
      res.json(result);
      res.end();
    }
  );
});

// UPDATE/Edit User - Working!!!
server.post("/coins/user/:email", function(req, res) {
  // console.log(req.body);

  if (!req.body) return res.sendStatus(400);

  var queryString = "UPDATE user SET userName=?, email=? WHERE email=?";

  connection.query(
    queryString,
    [req.body.userName, req.body.email, req.params.email],
    function(err, result) {
      if (err) throw err;
      // console.log("User Successfully Updated!", result);
      // res.redirect("/");
      res.json(result);
      res.end();
    }
  );
});

// Get all Coins Favorated by User - Working!!!
server.get("/coins/email/:email", function(req, res) {
  // console.log(req.body);

  if (!req.body) return res.sendStatus(400);

  var queryString = "SELECT * FROM userCoins WHERE email=?";

  connection.query(queryString, [req.params.email], function(err, result) {
    if (err) throw err;
    // console.log("Coins Favorated by user!", result);
    res.json(result);
    res.end();
  });
});

// Delete Coin query - Working!!!
server.get("/coins/deleteCoin/:id", function(req, res) {
  // console.log(req.body);

  if (!req.body) return res.sendStatus(400);

  var queryString = "DELETE FROM coins WHERE id=?";

  connection.query(queryString, [req.params.id], function(err, result) {
    if (err) throw err;
    // console.log("Coin Deleted!", result);
    res.json(result);
    res.end();
  });
});

// Delete Account - Working!!!
server.get("/coins/deleteUser/:email", function(req, res) {
  // console.log(req.body);

  if (!req.body) return res.sendStatus(400);

  var queryString = "DELETE FROM user WHERE email=?";

  connection.query(queryString, [req.params.email], function(err, result) {
    if (err) throw err;
    // console.log("User Deleted!", result);
    res.json(result);
    res.end();
  });
});

module.exports = server;
