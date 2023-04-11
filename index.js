const express = require('express');
const morgan = require('morgan');
const productController = require('./product')
const server = express();


//body parser
server.use(express.json())
server.use(morgan('default'))
server.use(express.static('public'))

//MVC model-view-controller
server.post('/products', productController.createProduct);
server.get('/products', productController.getAllProducts);
server.get('/products/:id', productController.getProduct);
server.put('/products/:id', productController.replaceProduct);
server.patch('/products/:id', productController.replaceProduct);
server.delete('/products/:id', productController.deleteProduct);

server.listen(8080, () => {
    console.log('server started');
});