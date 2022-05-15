module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'db/dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/migrations'
    },
    seeds: {
      directory: 'src/database/seeds/'
    },
    useNullAsDefault: true
  },

};
