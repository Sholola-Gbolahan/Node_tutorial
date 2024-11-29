//MODULES
// CommonJs  - Every file is module(by default)
//  Modules - Encapsulated code (only share minimum)
const names = require("./name")
const sayHi = require("./utils")

sayHi("susan")
sayHi(names.peter)
sayHi(names.john)
