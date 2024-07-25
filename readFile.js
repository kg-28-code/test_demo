const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync('./content/result.txt','utf-8');
// const second = readFileSync('./content/second.txt',utf-8);

console.log(first);
// writeFileSync('./content/result.txt',"Hello world");