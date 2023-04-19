const fs = require('fs')
const model = require('../Model/product')
const Product = model.Product
// const index = fs.readFileSync('index.html', 'utf-8')

exports.createProduct = (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then((doc) => {
            console.log(doc);
            res.status(201).json(doc)
        })
        .catch((err) => {
            console.log(err);
        });
}
exports.getAllProducts = (req, res) => {
    res.json(products)
}
exports.getProduct = (req, res) => {
    const id = +req.params.id
    const product = products.find(p => p.id === id)
    res.json(product)
}
exports.replaceProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.json({ 'status': 'UPDATED' })
}
exports.updateProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.json({ 'status': 'UPDATED' })
}
exports.deleteProduct = (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1,)
    res.json({ 'status': 'DELETE' })
}
