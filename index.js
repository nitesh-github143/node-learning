const express = require('express')
require('dotenv').config()

console.log(process.env.DB_PASSWORD)

const server = express()
const productRouter = require('./routes/product')
server.use(express.json())
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/products', productRouter.router)

server.listen(process.env.PORT, () => {
    console.log('server started')
})