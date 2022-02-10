const fs = require('fs')
try {
    const readFile = fs.readFileSync('test.txt')
    console.log(readFile.toLocaleString())
} catch {
    console.log('eror has been caught');
}