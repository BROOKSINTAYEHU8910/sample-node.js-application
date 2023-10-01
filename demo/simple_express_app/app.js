const express = require('express');

const fs = require("fs");
const { render } = require("pug");
const dir = "./public/";
const port = process.env.PORT || 3000;

const app = express();

app.get('/',(req,res)=>{
  renderFile(res,'index.html'); // Changed the function call to renderFile
})
app.get('/about',(req,res)=>{
  renderFile(res,'about.html'); // Changed the function call to renderFile
})
app.get('/contact',(req,res)=>{
  renderFile(res,'contact.html'); // Changed the function call to renderFile
})


app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})

const renderFile = (res, file) => { // Changed the function name to renderFile
  fs.readFile(dir + file, (err, data) => {
    if (err) {
      res.writeHead(404, { "content-Type": "text/html" });
      res.end("<h1>404 File Not Found</h1>");
    }
    res.writeHead(200,{'content-Type':'text/html'});
    return res.end(data);
  });
};
