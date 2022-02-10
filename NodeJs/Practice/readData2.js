const fs = require('fs')
const http = require('http')
data = "hi TE"
http.createServer((req, res) => {
    if (req.url === '/' && req.method === "GET") {
        fs.writeFile('Demo/test.txt', data, (err) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                })
                res.write('file not found')
                res.end()
            }
            else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                res.write("data has written succesfully", data);
                res.end()
            }

        })

    }
    else {
        res.writeHead(404,
            {
                'Content-Type': 'text/plain'
            })
        res.write('data not found')
        res.end()
    }
}).listen(4000, () => {
    console.log('server listeinig to the port 4000');
})