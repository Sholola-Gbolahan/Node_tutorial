//MODULES
// CommonJs  - Every file is module(by default)
//  Modules - Encapsulated code (only share minimum)
const names = require("./name")
const sayHi = require("./utils")

const data = require("./alternative-flavour")

sayHi("susan")
sayHi(names.peter)
sayHi(names.john)

console.log(data)
