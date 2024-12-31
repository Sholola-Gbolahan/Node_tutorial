// getting the http module
const http = require('http')

// creating server from the http
const server = http.createServer((req,res)=>{
res.write('Welcome to my homepage')
res.end()

})

// creating port to listen to server
server.listen(5000)