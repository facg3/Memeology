const { Pool } = require('pg');
require('env2')('./config.env');
let dbURL;
if(!process.env.DB_URL) throw new Error('DB_URL is not set :(')
dbURL = process.env.DB_URL;
const pool = new Pool({connectionString: dbURL})

module.exports = pool;
