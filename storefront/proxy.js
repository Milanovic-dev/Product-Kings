const dbConnect = require('../database/dbConnect');
const Shop = require('../models/shop');
const fs = require('fs');

dbConnect();

const proxyUrl = '/pk';

const proxyRoute = async (ctx, next) => {
  try {  
    var data = fs.readFileSync('./storefront/pkcore.js', 'utf8');   
  } catch(e) {
    console.log('Error:', e.stack);
  }
  ctx.response.set('Content-Type', 'application/liquid');
  ctx.body = LiquidEmptyTemplate(ctx.request.query.shop, data.toString());
}

const LiquidEmptyTemplate = (shop, script) => {
  return `
  <div style="text-align:center" id="cpb-root">
    Loading...
  </div>
  <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
  <script>
    localStorage.setItem('shopOrigin','${shop}');
    ${script}
  </script>
  `;
}

module.exports = { proxyRoute, proxyUrl }