const product =
    [
        { name: 'shaikh' },
        { id: 100 }
    ]
const mobile = [
    { name: 'REDMI' },
    { price: 15200 }
]

const handler = (request, response) => {
    if (request.url === '/') {
        response.end('home page')
    }
    else if (request.url === '/login') {
        const prod = JSON.stringify(product)
        response.end(prod)
    }
    else if (request.url === '/about') {
        response.end('Iam Shaikh')
    }
    else if (request.url === '/shop') {
        const shop4u = JSON.parse(mobile)
        response.end(shop4u)
    }
    else {
        console.error('error')
    }
}

const http = require('http')
http.createServer(handler).listen(3000, () => {
    console.log('server 3000');
})