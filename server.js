const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>The Server Lives!</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text"><button>Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html><h1>Hello!</h1></html>");
});

server.listen(5000);
