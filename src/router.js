const handlers = require("./handlers.js");
const router = (request, response) => {
  const url = request.url;
  
  if (url === "/"){
    handlers.homepage(request, response);
  }
  else if (url.startsWith("/public")){

    handlers.handler(request, response);
  }

  else {
    response.writeHead(404);
    response.end("PAGE NOT FOUND!!!!!!!!!!");
  }
}
module.exports = router;
