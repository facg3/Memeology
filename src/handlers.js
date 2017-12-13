const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const homepage = (request, response) =>{
  fs.readFile(path.join(__dirname, "..","public", "index.html"), (err, file)=>{
    if (err){
      response.writeHead(500, {"content-type":"text/html"});
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");}
  else {
  response.writeHead(200, {"content-type":"text/html"
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

  fs.readFile(path.join(__dirname, "..", url), function (err, file){
    if(err){
      response.writeHead(500, {"content-type":"text/html"});
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    }
    else {
      response.writeHead(200, "Content-Type:" + filetype[extension])
      response.end(file);
    }
  });
  }

const getGame = (request, response) => {
  var allGame = "";
    request.on('data', function (chunkOfData) {
        allGame += chunkOfData;
    });
    request.on('end', function () {
    fs.readFile(path.join(__dirname , 'games.json'),function(err,files){
      if(err){
        console.log(err);
      }else{
        var filter = allGame.toUpperCase();
        var obj = JSON.parse(files);
        var listgame = [];
        for (var i = 0; i<obj.length;i++){
          var game = obj[i].name;
          if(game.toUpperCase().startsWith(filter)){
            listgame.push(game);
          }
        }
        response.end(JSON.stringify(listgame));
      }
    })

    });
  };



  module.exports = {
    homepage,
    handler,
    getGame
    }
