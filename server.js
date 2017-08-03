var http = require("http");

var router = require("./router");

http.createServer(router).listen(3000);

console.log("server is running at port 3000...");