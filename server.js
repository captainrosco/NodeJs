const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "text/html");

  //Home Route
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>The Server Lives!</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  //FORM SUBMITED
  if (url === "/message" && method === "POST") {
    const body = [];
    //Read request and creates buffers.
    req.on("data", chunk => {
      body.push(chunk);
    });
    //Parse Request and creates readable text.
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  //Defaults for all other routes.
  res.setHeader("Content-type", "text/html");
  res.write("<html><h1>Hello!</h1></html>");
});

server.listen(5000);
