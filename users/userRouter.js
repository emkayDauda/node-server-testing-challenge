const express = require("express");
const db = require("./userModel.js");

const users = express.Router();

users.get("/", (req, res) => {
  db.get().then(users => {
    res.status(200).json(users);
  });
});

users.post("/", (req, res) => {});

module.exports = users;
