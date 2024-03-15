const knex = require('knex');
const knexConfig = require('./src/data-access/knexfile');

const environment = process.env.NODE_ENV || 'development';
const knexInstance = knex(knexConfig[environment]);

module.exports = knexInstance;