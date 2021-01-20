require("dotenv").config();
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const webpack = require('webpack');

const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY);
const mongoUri = process.env.MONGO_URI;
const host = process.env.HOST_DOMAIN;

module.exports = withImages(withCSS({
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    const env = { API_KEY: apiKey, MONGO_URI: mongoUri , HOST_DOMAIN: host };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
}));
