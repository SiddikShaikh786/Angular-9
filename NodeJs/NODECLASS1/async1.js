const fs = require('fs')
let data = "this is the test 2 native module"
!fs.exists('Demo', (isAvail) => {
    if (isAvail) {
        fs.mkdir('Demo', (err) => {
            console.error(err)
        })
    }
    else {
        fs.writeFile('Demo/test3.txt', data, (fileErr) => {
            if (fileErr) {
                console.error(fileErr)
            }
            else {
                console.log('successufully written');
            }

        })
    }
})