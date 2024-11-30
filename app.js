const { log } = require('console');
const path = require('path')
console.log(path.sep);

const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath);
//result :  \content\subfolder\test.txt


const base = path.basename(filePath)
console.log(base);
// result : test.txt

const absolute = path.resolve(__dirname,'context','subfolder','text.text')
console.log(absolute);
// result : E:\React Base\NodeJs Course\Tutorial\context\subfolder\text.text


