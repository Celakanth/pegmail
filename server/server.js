/*
  server.js
  rouiting controller for the mailer
*/
require('./../config/config');
const express = require('express');
const port = process.env.PORT || 3000

var app = express();

app.get("/", (req,res) => {
  res.send({
    name: 'Christian'
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
