const fs = require('fs')
const http = require('http')
const url = require('url')
http.createServer((request, response) => {
    const q = url.parse(request.url, true)
    const filename = '.' + q.pathname
    fs.readFile(filename, (err, data) => {
        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            response.write('404 not Found!')
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.write(data)
            return response.end()
        }
    })
}).listen(4003, () => {
    console.log('server running on port 4000');
})  