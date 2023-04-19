const fs = require('fs')
const mongoose = require('mongoose');
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
exports.getAllProducts = async (req, res) => {
    const product = await Product.find({ price: { $gt: 600 } })
    res.json(product)
}
exports.getProduct = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)
    res.json(product)
}
exports.replaceProduct = async (req, res) => {
    const id = req.params.id
    const doc = await Product.findOneAndReplace({ _id: id }, req.body)
    res.json({ 'status': 'UPDATED' })
}
exports.updateProduct = async (req, res) => {
    const id = req.params.id
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.json({ 'status': 'UPDATED' })
}
exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    const doc = await Product.findOneAndDelete(id)
    res.json({ 'status': 'DELETE' })
}
