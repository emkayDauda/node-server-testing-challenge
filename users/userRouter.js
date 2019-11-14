const express = require('express')
const db = require('./userModel.js')

const users = express.Router()

users.get('/', (req, res) => {
    res.status(300).json([])
})

users.post('/', (req, res) => {

})

module.exports = users;