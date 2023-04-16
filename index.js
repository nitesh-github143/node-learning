const express = require('express')

const server = express()
const productRouter = require('./routes/product')
server.use(express.json())
server.use(express.static('public'))
server.use('/products', productRouter.router)

server.listen(3000)