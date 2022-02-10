const stream = require('fs')
const read = stream.createReadStream('test.txt');
let readData = "";
read.on('open', () => {
    console.log('strem opened');
})

read.on('data', (chunk) => {
    console.log("data", chunk);
    console.log(chunk.toLocaleString());
})
read.on('end', () => {
    console.log('strema ended');
})