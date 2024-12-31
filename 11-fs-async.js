// Note :
//  Pros : ASYNC Approach runs many task at once making process fast, 
// cons : Longer code base

const { readFile, writeFile } = require("fs")

console.log('start');

// Reading first file
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result

  // Reading second file after first file is successful
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result

    // storing the value of the two files in a new file that will be created if not existing
    writeFile(
      "./content/result-async.txt",
      `here's the result : ${first}, ${second}`,
      (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('Done with task');
      }
    )
  })
})

console.log('Starting new Task');

