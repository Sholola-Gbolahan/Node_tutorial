// getting the http module
const http = require("http")

// creating server from the http
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page")
    return
  }

  if (req.url === "/about") {
    res.end("Here is our short history")
    return
  }

  res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you're looking for </p>
    <a href='/'> Home</a>
    `)
})

// creating port to listen to server
server.listen(5000)
