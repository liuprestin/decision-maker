const { Pool } = require("pg");
const {HOST, USER, PASSWORD, DATABASE, PORT} = require("./constant");

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
  port: PORT
});
const query = function (text, params, callback) {
  return pool.query(text, params, callback)
}

module.exports = {query}