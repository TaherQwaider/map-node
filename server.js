const http = require('http');
const app = require('./app/routes/api')
require("./app/models/dbConnect");
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer(app)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
