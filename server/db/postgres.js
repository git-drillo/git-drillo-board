const { Pool } = require("pg");
require("dotenv").config();

const PG_URI = `postgres://dkmfskhk:wazwc7rMvBgPiV2it0xx5P5Vg_15QgaQ@ruby.db.elephantsql.com:5432/dkmfskhk`

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
