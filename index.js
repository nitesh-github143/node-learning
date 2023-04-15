const fs = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products
const morgan = require('morgan')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static('public'))


const createProduct = (req, res) => {
    console.log(req.body)
    products.push(req.body)
    res.status(201).json(req.body)
}
const getAllProducts = (req, res) => {
    res.json(products)
}
const getProduct = (req, res) => {
    const id = +req.params.id
    const product = products.find(p => p.id === id)
    res.json(product)
}
const replaceProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.json({ 'status': 'UPDATED' })
}
const updateProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.json({ 'status': 'UPDATED' })
}
const deleteProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1,)
    res.json({ 'status': 'DELETE' })
}

server.get('/products', getAllProducts)
server.get('/products/:id', getProduct)
server.post('/products', createProduct)
server.put('/products/:id', replaceProduct)
server.patch('/products/:id', updateProduct)
server.delete('/products/:id', deleteProduct)

server.listen(3000)