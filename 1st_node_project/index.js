// # will create simple http server 

const http = require('http');

console.log('server')

http.createServer((req, resp) => {
    resp.writeHead("201", {'Content-Type' : 'text/html'});
    resp.write("<h1> how are you </h1>");
    console.log("server is created.");
    resp.end();
}).listen('7001');