const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  accessToken: {
    type: String,
    require: true
  },
});

module.exports = mongoose.models.Shop || mongoose.model('Shop', ShopSchema);