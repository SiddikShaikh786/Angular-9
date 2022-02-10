const http = require('http')
const handler = require('./handler')
const server = http.createServer(handler.handlerRequest).listen(3000, () => {
    console.log('server listning the port 3000')
})