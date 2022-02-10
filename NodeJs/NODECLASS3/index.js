const axios = require('axios')
result = ""
axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    this.result = res
    console.log(this.result)
}).catch((error) => {
    console.error(error)
})