const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
    res.end('Hello there')
})

server.listen(port, () => {
    console.log('Server listining on port: %s', port)
})