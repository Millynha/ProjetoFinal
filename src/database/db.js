// database/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'aluno_20201214010021',
  host: '177.136.201.182',
  database: 'temp',
  password: '128407',
  port: 5439,
});

module.exports = pool;
