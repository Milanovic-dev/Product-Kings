const dbConnect = require('../database/dbConnect');
const Product = require('../models/Product');

dbConnect();

const createProduct = (name, shop) => {
  const product = Product.create({name, shop});

  return { success: true, data: product };
}

const getProducts = async (shop) => {
  const products = await Product.find({shop}).exec();

  return { success: true, data: products};
};


module.exports = {createProduct, getProducts};
