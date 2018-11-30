const express = require("express");
const jsonServer = require("json-server");
const server = express();
const path = require("path");
require("dotenv").config();
const router = jsonServer.router(path.join(__dirname, "coins.json"));
var PORT = process.env.PORT || 3001;
const serverRoutes = require("./routes/apiRoutes");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "build/")));
} else {
  server.use(express.static(path.join(__dirname, "public/")));
}

server.use("/api/v1", router);
server.use("/api/server", serverRoutes);

// server.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/index.html"));
// });

server.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});
