'use strict';

const config = {
  local: {
    client: 'pg',
    connection: 'postgres://pokeshine:pokeshine@postgres:5432/pokeshine_db',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/dev'
    }
  },
  prod: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB_NAME
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/prod'
    }
  },
};

module.exports = config;
