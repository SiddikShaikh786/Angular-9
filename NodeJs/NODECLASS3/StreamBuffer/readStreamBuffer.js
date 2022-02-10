const fs = require('fs')
const readStream = fs.createReadStream('readStreamBuffer.txt')
let readData = "";

readStream.on('data', (chunk) => {
    console.log('data from the file');
    console.log(chunk);
    readData += chunk
    console.log(readData.toString());
})

readStream.on('open', () => {
    console.log('reading stream has been opened');
})

readStream.on('end', () => {
    console.log('reading strema has been cancelled');
})
readStream.on('err', () => {
    console.log(err);
})