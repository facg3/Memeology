const dbconnection = require('../database/dbconnection');

const findMeme = (tag, cb) => {
  const sql = {
    text: `select url from memes where tags LIKE $1;`,
    values: [`%${tag}%`]
  };
  console.log(sql)
  dbconnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows[0].url);

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
