const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, min: 0, required: true },
    discountPercentage: { type: Number, min: 0, max: 50 },
    rating: { type: Number, min: 0, max: 5 },
    brand: { type: String, required: true },
    category: String,
    thumbnail: { type: String, required: true },
    images: [String]
});

exports.Product = mongoose.model('Product', productSchema)