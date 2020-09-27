const fs = require('fs');

const proxyUrl = '/pk';

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

const proxyRoute = async (ctx) => {
  try {  
    const data = fs.readFileSync('./storefront/pkcore.js', 'utf8');   
    ctx.response.set('Content-Type', 'application/liquid');
    ctx.body = LiquidEmptyTemplate(ctx.request.query.shop, data.toString());
  } catch(e) {
    console.log('Error:', e.stack);
  }
}


module.exports = { proxyRoute, proxyUrl }