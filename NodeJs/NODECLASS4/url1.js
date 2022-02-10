const url = require('url')
const http = require('http')
http.createServer((request, response) => {
    const reqUrl = url.parse(request.url, true)
    console.log(reqUrl.query.id);
    console.log(reqUrl.query.name);
    console.log(reqUrl.query.dept);
    console.log(reqUrl.query.city);

    response.write('this has come from server')
    response.write(JSON.stringify(reqUrl.query))
    response.end(" end cycle")

}).listen(3000, () => {
    console.log('server listeinig the port 3000');
})