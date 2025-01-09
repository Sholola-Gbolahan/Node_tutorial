const { readFile, writeFile } = require("fs").promises

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8")
    const second = await readFile("./content/second.txt", "utf8")
    await writeFile(
      "./content/result-granade.txt",
      `Hellooo : ${first} ---- ${second}`,
      { flag: "a" }
    )

    console.log(first)
    console.log(second)
  } catch (error) {
    console.log(error)
  }
}

start()

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
