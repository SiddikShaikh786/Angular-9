const http = require('http')
const fs = require('fs')
http.createServer((request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        fs.readFile('view.txt', (err, data) => {
            if (err) {
                response.writeHead(404, {
                    'Content-Type': 'text/plain'
                })
                response.write('File not found')
                response.end()
            }
            else {
                //if we put file/html it will be download file
                //if we put text/html it will be just display the content
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                response.write(data)
                response.end()
            }
        })
    }
    else {
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        })
        response.write('file not Found  folder not found')
        response.end()
    }
}).listen(4000, () => {
    console.log('server listning to the port 4000');
})