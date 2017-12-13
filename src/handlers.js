const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const dynamic = require('./dynamic');

const homepage = (request, response) => {
  fs.readFile(path.join(__dirname,"..", "index.html"), (err, file) => {
    if (err) {
      response.writeHead(500, {
        "content-type": "text/html"
      });
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    } else {
      response.writeHead(200, {
        "content-type": "text/html"
      });
      response.end(file);
    }
  });
}

const handler = (request, response) => {

  const url = request.url;
  const extension = url.split(".")[1];
  const filetype = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json"
  };

  fs.readFile(path.join(__dirname, "..", url), function(err, file) {
    if (err) {
      response.writeHead(500, {
        "content-type": "text/html"
      });
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    } else {
      response.writeHead(200, "Content-Type:" + filetype[extension])
      response.end(file);
    }
  });
}

const memeTag = (request, response) => {
var allTag = "";
request.on('data', function(chunkOfData) {
  console.log("allTag IS: " , allTag);
  allTag += chunkOfData;
});
request.on('end', function(err) {
    if (err) {
      console.log(err);
    } else {

      console.log("tag is ", allTag);
      var tagsArray = dynamic.findMeme(allTag, (err, res) => {
        if (err) {
          response.writeHead(500, 'Content-Type: text/html');
          response.end('<h1>ERROR!!</h1>');
          console.log(err);
        } else {
          response.writeHead(200, 'Content-Type: text/html');
          console.log("allTag is ", allTag)
          console.log("res is ", res)
          response.end(res)
        }
      })


    }
  });};


module.exports = {
  homepage,
  handler,
  memeTag
}
