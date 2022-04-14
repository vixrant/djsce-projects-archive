const {
  databaseHost,
  databaseName,
  databasePassword,
  databaseUser,
} = require('../config/index');

// TODO: add afterCreate and connTimeout
module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: databaseHost,
    user: databaseUser,
    password: databasePassword,
    database: databaseName,
  },
  pool: { min: 0, max: 7 },
});
