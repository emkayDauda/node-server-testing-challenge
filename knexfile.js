// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/node-server.db3'
    },
    migrations: {
      directory: './database/migrations/'
    },
    seeds: {
      directory: './database/migrations/'
    },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/node-server-testing.db3'
    },
    migrations: {
      directory: './database/migrations/'
    },
    seeds: {
      directory: './database/migrations/'
    },
  },

  production: {
    
  }

};
