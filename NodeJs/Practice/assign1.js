const fs = require('fs')
data = "hi shaikh"
const writefile =
    fs.writeFile('Demo/test2.txt', data, (err) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log('data has wriiten successfully');
            fs.appendFile('Demo/test2.txt', " hello TE", (err) => {
                if (err) throw err
            })
        }
    })

fs.exists('Demo', (exists) => {
    if (!exists) {
        fs.mkdir('Demo', (Err) => {
            if (Err) {
                console.log('file not found')
            }
            else {
                writefile();
                console.log('Folder found');
                rename();
                console.log('renamed succefully');

            }

        })
    }
    else {
        fs.readFile('Demo/test2.txt', (err, data) => {
            if (err) {
                console.error(err)
            }
            else {
                console.log(data.toLocaleString())
            }
        })
    }
})

const rename = fs.rename('Demo/test2.txt', 'Demo/hello.txt', () => {
    console.log('renamed successfully')
})
