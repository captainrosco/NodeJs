const http = require("http");
const express = require("express");

const app = express();

//Middleware
app.use((req, res, next) => {
  console.log("Here");
});

const server = http.createServer();

server.listen(5000);
