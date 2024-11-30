const { log } = require('console');
const {readFileSync, writeFileSync, read} = require('fs')

// Reading files
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

log(first)
log(second)


// writing files (automatic create if file didn't exit)

writeFileSync('./content/result-sync.txt',`Here's the result ${first} and ${second}`,{flag : 'a'})