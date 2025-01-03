// npm - global command, comes with node
//  npm --version : display version of npm in use


// local dependency - use it only in this particular project 
// npm i <packageName>  : install packages

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> : command used in (mac)

// package.json - manifest file (stores important info about project/package)
// npm init (manual step by step approach of creating package.json)
// npm init -y (creates package.json by default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems =_.flattenDeep(items)
console.log(newItems);
