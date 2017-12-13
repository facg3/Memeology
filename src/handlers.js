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
  allTag += chunkOfData;
});
request.on('end', function(err) {
    if (err) {
      console.log(err);
    } else {
      var tagsArray = dynamic.findMeme(allTag, (err, res) => {
        if (err) {
          response.writeHead(500, 'Content-Type: text/html');
          response.end('<h1>ERROR!!</h1>');
          console.log(err);
        } else {
          response.writeHead(200, 'Content-Type: text/html');
          response.end(res)
        }
      })


    }
  });};

const uploadMeme = (request, response) =>{
  var allinfo = "";
  request.on("data", function(chunkOfData){
    allinfo += chunkOfData
  });

request.on('end', function(err){
  if(err){
    console.log(err);
  } else {
    var uploading = dynamic.addMeme(allinfo, (err, res)=>{
      if(err){
        response.writeHead(500, 'Content-Type: text/html');
        response.end('<h1>ERROR!!</h1>');
        console.log(err);}

      else{
        response.writeHead(200, 'Content-Type: text/html');
        response.end(JSON.stringify(res));}

      })

    }
  })
 }




module.exports = {
  homepage,
  handler,
  memeTag,
  uploadMeme
}
