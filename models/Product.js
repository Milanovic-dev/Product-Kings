const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  shop: String
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductsSchema);