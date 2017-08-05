const http = require('http');
const router = require('./router/router');

const PORT = 4000;

http.createServer(router).listen(PORT);

console.log('server is running at port ' + PORT + '...');