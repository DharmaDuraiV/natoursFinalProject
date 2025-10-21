const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hello from the server 8000");
});

server.listen(8000, "127.0.0.1", (err) => {
  if (err) throw err;
  console.log("server is running on the port 8000");
});
