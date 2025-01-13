// getting the http module
const http = require("http")

// creating server from the http
const server = http.createServer()
//

// Using Emitter API
// Emits request event
// Subctibe to it / listen to it / respond to it

server.on("request", (req, res) => {
  res.end("welcome")
})

server.listen(5000)
