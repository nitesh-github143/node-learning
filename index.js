const fs = require('fs')
// const { sum, diff } = require('./app')

// console.log(sum(3, 4))
// console.log(diff(3, 4))
console.log(performance.now())
fs.readFile('demo.txt', 'utf-8', (err, txt) => {
    console.log(txt)
})

console.log(performance.now())
