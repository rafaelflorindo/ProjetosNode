var express = require("express");

var app = express();
const path = require('path')

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get("/produto", function (req, res) {
  res.sendFile(path.join(__dirname + '/produto.html'))

});

app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});