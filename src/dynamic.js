const dbconnection = require('../database/dbconnection');

const findMeme = (tag, cb) => {
 const sql = {
   text: 'select url from memes where tag = $1;',
   values: [tag],
 };
 dbConnection.query(sql, (err, res) => {
   if (err) cb(err);
   cb(null, res.rows);
 });
};

const addMeme = (url, tag, cb) => {
  const sql = {
    text: 'INSERT into memes (url, tags) values ($1, $2)',
    values: [url, tag];
  }
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};

const updateLikes = (likes, url,  cb) => {
  const sql = {
    text: 'update memes set likes = $1 where url= $2 '
    values: [likes, url]
  }
  dbConnection.query(sql, (err, res) => {
    if(err) cb(err);
    cb(null, res.rows);
  })
}

module.exports = {
  findMeme,
  addMeme
}
