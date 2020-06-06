const { Pool } = require("pg");
require("dotenv").config();

const PG_URI = process.env.PG_URI;

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
    console.log("executed query", text);
    console.log("PG_URI", PG_URI);
    return pool.query(text, params, callback);
  },
}

// pool.query('SELECT * FROM users', [1], (err, res) =>{
//   if(err) throw err;
//   else console.log('users: ', res)
// });

pool.connect()
    .then((res) => console.log('CONNECTED TO DB ', res));