console.log('prgromm started');
const fs = require('fs');
const writeFile = () => {
    fs.writeFile('Demo/test.txt', "this is the async core module", (err) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log('data has been created successfully');
        }
    })
}
const readFile = () => {
    fs.readFile('Demo/test.txt', (readErr, data) => {
        if (readErr) {
            console.error(readErr)
        }
        else {
            console.log("data in the file is", data.toString());
        }
    })
}
fs.exists('Demo', (exists) => {
    if (!exists) {
        fs.mkdir('Demo', (err) => {
            if (err) {
                console.log('folder has not been created')
            }
            else {
                writeFile()
                readFile()

            }
        })
    }

})
console.log('programm ended')