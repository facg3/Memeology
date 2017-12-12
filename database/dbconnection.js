const {Pool} = require('pg');

let dbUrl;

require('env2')('./config.env');

if(!process.env.DB_URL) throw new Error ('DB_URL is not set');
dbUrl = process.env.DB_URL;
const pool = new Pool({connectionString: dbURL, ssl: true})
module.exports = pool
