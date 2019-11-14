const db = require('../database/dbConfig')

async function getAll() {
    await db('users as u')
}

async function insert(user){
    await db('users')
    .insert(user)
}

module.exports = {
    getAll,
    insert,
}