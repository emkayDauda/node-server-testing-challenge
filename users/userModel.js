const db = require('../database/dbConfig')

function get(id) {
    let query = db('users as u')
    if (id) query.where('u.userId', id).first()

    return query
}

async function insert(user){
    return db('users')
    .insert(user)
    .then(([id]) => this.get(id))
}

module.exports = {
    get,
    insert,
}