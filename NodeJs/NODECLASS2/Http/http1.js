const http = require('http')
const server = http.createServer((request, response) => {
    console.log('sever has been  created');
    console.log('Request', request);
    console.log("response", response);
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('hello world')//we can use multiple times
    // response.write('this is the second part of the response')
    response.end('terminate the request and response cycle') //should be used only once time



})
server.listen(4000, () => {
    console.log('the server listening on port 4000');
})