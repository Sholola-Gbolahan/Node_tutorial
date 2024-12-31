// Note: SYNC Approach runs task one after the other which slows down processes
const { readFileSync, writeFileSync } = require("fs")
console.log('starting new task');

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

writeFileSync(
  "./content/result-sync.txt",
  `here's the result : ${first}, ${second}`,
//   writeFileOption {flag: 'a'} :  will keep adding data to the file overiding the initial setup of updating the file
{flag:'a'}
)
console.log('Done with task');

console.log('Starting new task');

