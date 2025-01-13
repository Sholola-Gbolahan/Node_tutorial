var http = require('http')
var fs = require('fs')


http
.createServer((req,res)=>{
// const text = fs.readFileSync('./content/big.txt', 'utf8')
// res.end(text)
const fileStream = fs.createReadStream('./content/big.txt','utf8' );

fileStream.on('open',()=>{
    // instead of res and req, filestream as a file method called Pipe:
    // Pipe: It pushes from the readStream into writeStream
    fileStream.pipe(res)


})

fileStream.on('error',  (err)=>{
    console.log(err);
    
})

})
.listen(5000)