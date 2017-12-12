const { Pool } = require('pg');
require('env2')('./config.env');
let dbURL;
if(!process.env.DATABASE_URL) throw new Error('DB_URL is not set :(')
dbURL = process.env.DATABASE_URL;
const pool = new Pool({connectionString: dbURL, ssl: true})

module.exports = pool;
