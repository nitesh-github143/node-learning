const fs = require('fs');
const express = require('express')

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const server = express()

server.use(express.json())

server.use((req, res, next) => {
    // console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
    next()
})

const auth = (req, res, next) => {
    console.log(req.query)
    if (req.body.password === '123') {

        next()
    } else {
        res.sendStatus(401)
    }

}

// server.use(auth)
server.get('/', auth, (req, res) => {
    res.json({ type: 'GET' })
})

server.post('/', (req, res) => {
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
    res.sendStatus(404)
    // res.sendFile('index.html')
    // res.json(data)
})


server.listen(8000, () => {
    console.log('server started')
})