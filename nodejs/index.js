const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log(process.env.NODE_ENV)

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('wdnmd1');
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)