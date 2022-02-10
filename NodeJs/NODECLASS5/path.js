const path = require('path')
const readUr = path.parse(__filename)
console.log("EXtension", readUr.ext)
console.log("base", readUr.base);
console.log("Directrory", readUr.dir);
console.log("name", readUr.name);
console.log("root", readUr.root);