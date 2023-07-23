const { Pool } = require("pg");
const {HOST, USER, PASSWORD, DATABASE} = require("./constant");

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
});
const query = function (text, params, callback) {
  return pool.query(text, params, callback)
}

module.exports = {query}