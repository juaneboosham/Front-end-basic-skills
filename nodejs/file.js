var fs = require('fs')
var express = require('express');
var app = express();

var pdfBuffer = fs.readFileSync('../utils/kuaishou.pdf')


app.get('/demopdf', function (req, res) {
    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=demo.pdf',
        'Access-Control-Allow-Origin': '*'
      })
    res.send(pdfBuffer)
  });

const obj = {
    name:'laomao',
    color:'yello'
}  

app.get('/', function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    res.send(obj)
});

app.listen(3000)
console.log(pdfBuffer)