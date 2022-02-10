const login =
    [
        {
            name: "Shaikh",
            age: 25
        },
        {
            name: "Faizan",
            age: 25
        },
    ]
const products =
    [
        { name: "Shiakh" },
        { name: "BOAT" }
    ]

const handlerRequest = (request, response) => {
    if (request.url == '/') {
        response.end('home page')
    }
    else if (request.url === '/login') {
        const jsonForm = JSON.stringify(login)
        response.end(jsonForm)
    }

    else if (request.url === '/products') {
        response.end(products)
    }
    else if (request.url === '/about') {
        response.end('<h1>contact me</h1>')
    }
    // else {
    //     response.end('invalid routes')
    // }
}

module.exports = {
    handlerRequest
}