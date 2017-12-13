const dbconnection = require('../database/dbconnection');

const findMeme = (tag, cb) => {
  const sql = {
    text: `select url from memes where tags LIKE $1;`,
    values: [`%${tag}%`]
  };
  console.log(sql)
  dbconnection.query(sql, (err, res) => {
    if (err) cb(err);
    console.log("RESPONSE IS: ", res);
    var urls = [];
    for (var i in res.rows){
      urls.push(res.rows[i].url)
}
cb(null, JSON.stringify(urls));
  });
};

const addMeme = (url, tag, cb) => {
  const sql = {
    text: 'INSERT into memes (url, tags) values ($1, $2)',
    values: [url, tag]
  }
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};


module.exports = {
  findMeme,
  addMeme
}
