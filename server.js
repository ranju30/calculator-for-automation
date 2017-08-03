var http = require("http");

var router = require("./router");

http.createServer(router).listen(4000);

console.log("server is running at port 4000...");