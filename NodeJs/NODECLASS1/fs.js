console.log('core module');
console.log('program started');
const fs = require('fs');
if (!fs.existsSync('Demo')) {
    fs.mkdirSync('Demo')
    console.log('created ');
}
else {
    fs.writeFileSync('Demo/test.txt', 'this is the first file node js core module')
    console.log('data has been written successfully');

    const data = fs.readFileSync('Demo/test.txt')
    console.log(data);
    console.log(data.toString());
}
fs.appendFileSync('Demo/test.txt', '  appended')
const dataChanged = fs.readFileSync('Demo/test.txt')
console.log(dataChanged.toString())
console.log('prgram ended');