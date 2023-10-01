const http = require("http");
const fs = require("fs");
const { render } = require("pug");
const dir = "./public/";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    customRender(res, "index.html");
  } else if (req.url === "/about") {
    customRender(res, "about.html");
  } else {
    res.writeHead(404, { "content-Type": "text/html" });
    res.end("<h1>404 File Not Found</h1>");
  }
}).listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const customRender = (res, file) => {
  fs.readFile(dir + file, (err, data) => {
    if (err) {
      res.writeHead(404, { "content-Type": "text/html" });
      res.end("<h1>404 File Not Found</h1>");
    }
    res.writeHead(200,{'content-Type':'text/html'});
    return res.end(data);
  });
};
