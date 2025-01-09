const { readFile, writeFile } = require("fs")
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
  try {
    const first = await readFilePromise('./content/first.txt','utf8')
    const second = await readFilePromise('./content/second.txt','utf8')

    await writeFilePromise('./content/result-granade.txt',`Hellooo : ${first} ---- ${second}`)

    console.log(first)
    console.log(second)

  }

  catch(error) {
console.log(error);

  }

}

start()

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
