const express = require('express')
const mongoose = require('mongoose');

const productRouter = require('./routes/product')
require('dotenv').config()

console.log(process.env.DB_PASSWORD)

//db connection 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('hello nitesh')
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//schema



const server = express()
server.use(express.json())
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/products', productRouter.router)

server.listen(process.env.PORT, () => {
    console.log('server started')
})