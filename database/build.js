const fs = require('fs');
const dbConnection = require('./dbconnection');
const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();
dbConnection.query(sql, (err,res)=>{
  if(err) console.log("Query error")
  else {
    console.log("response is ", res);
  }
});
