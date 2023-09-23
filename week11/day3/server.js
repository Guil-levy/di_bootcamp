const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  if (url === "/") {
    
    response.end("<h1>Home</h1>");
  } else if (url === "/about") {
    response.end("<h1>About</h1>");
  } else {
    response.end("<h1>Page not found 404</h1>");
  }
  // response.end('Hello from my first webserver');
});

server.listen(5000);
