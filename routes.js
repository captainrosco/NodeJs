const fs = require("fs");

//Home Route
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
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
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;
