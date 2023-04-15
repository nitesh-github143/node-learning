const fs = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products
const morgan = require('morgan')
const express = require('express')
//server created
const server = express()


server.use(express.json())
// server.use(express.url())
server.use(morgan('default'))
server.use(express.static('public'))
// server.use((req, res, next) => {
//     console.log(req.get('User-Agent'), req.ip, req.hostname)
//     next()
// })

const auth = (req, res, next) => {
    // console.log(req.query)
    if (req.body.password === '123') {
        next()
    } else {
        res.sendStatus(401)
    }
}

server.get('/product/:id', (req, res) => {
    console.log(req.params)
    res.json({ type: 'GET' })
})
server.post('/', auth, (req, res) => {
    res.json({ type: 'POST' })
})
server.put('/', (req, res) => {
    res.json({ type: 'PUT' })
})
server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' })
})
server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' })
})

server.get('/demo', (req, res) => {
    // res.sendStatus(201).send('<h1>Hi</h1>')
    // res.json(products)
    // res.end('hello')
    // res.sendFile('C:/Users/NITESH/Desktop/Web Development/node/node-learning/index.html')
})

server.listen(3000)