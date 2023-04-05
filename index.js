const fs = require('fs')
// const { sum, diff } = require('./app')

// console.log(sum(3, 4))
// console.log(diff(3, 4))

const txt = fs.readFileSync('demo.txt', 'utf-8')
console.log(txt)