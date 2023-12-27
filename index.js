require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = require('./app.js');

const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({alive: 'True'});
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(port, () => {
        console.log(`Connected to DB and listening on port ${port}...`);
      });
    })
    .catch((error) => {
      console.log(error);
    });


