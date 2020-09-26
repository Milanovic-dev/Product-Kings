const dbConnect = require('../database/dbConnect');
const Product = require('../models/Product');

dbConnect();

const createProduct = (name, shop) => {
  const product = new Product({name, shop});

  product.save((err) => {
    if(err) console.error("ERR:" + err);
  })

  return { success: true };
}

module.exports = {createProduct};
