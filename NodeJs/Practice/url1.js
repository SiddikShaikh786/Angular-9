const url = require('url')
const http = require('http')
http.createServer((request, response) => {
    const reqUrl = url.parse(request.url, true)
    console.log(reqUrl.query.id);
    console.log(reqUrl.query.name);
    console.log(reqUrl.query.adress);

    response.write('message from server')
    response.write(JSON.stringify(reqUrl.query))
    response.end()
}).listen(4000,
    () => {
        console.log('server listening to the port');
    })