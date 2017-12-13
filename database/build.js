const fs = require('fs');

const dbConnection = require('./dbconnection');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();
<<<<<<< HEAD
dbConnection.query(sql, (err,res)=>{
  if(err) {
    console.log(err)};
  else {
    console.log(`response is  ${res}`);
=======

dbConnection.query(sql, (err, res) => {
  if(err){
    console.log(err);
  } else {
    console.log(`response is ${res}`);

>>>>>>> 0391804fe3e59d0bf23c7eabeec9b2fabceb6ebe
  }

});
