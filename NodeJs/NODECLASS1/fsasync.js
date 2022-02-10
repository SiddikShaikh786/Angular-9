console.log('program started');
const fs = require('fs')
fs.writeFile('Demo/view.txt', 'this is the async operation', (fileError) => {
    if (fileError) {
        console.error(fileError);
    }
    else {
        console.log('data has been wriiten successfully');
        fs.readFile('Demo/view.txt', function (err, data) {
            if (err) {
                return console.error(err)
            }
            console.log("Asynchrnous read", data.toString())


        })
        // }

    }
});
// if (!fs.exists) {
//     fs.mkdir('View', (err) => {
//         if (err) {
//             console.log('folder has not been created');
//         }
//         else {
//             console.log('folder has been created successfully');
//             writeFile()
//         }
//     })
// }
// else {
//     writeFile();
//     // console.log('data has been written successfullys');
// }
console.log('Programm Ended');
