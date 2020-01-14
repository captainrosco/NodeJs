const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>The Server Lives!</title></head>");
    res.write("<body><h1>Server Lives!</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(5000);
