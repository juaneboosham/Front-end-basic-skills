const path = require('path')
console.log(path.sep)
console.log(path.delimiter)

console.log(path.basename('/test/something')) //something
console.log(path.basename('/demo/demo.txt')) //demo.txt
console.log(path.basename('/test/something.wdnmd', '.wdnmd')) //something

var methods = require('http').METHODS;
console.log(methods)