const https = require('https');
https.get('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Construction_site_in_Tokyo_2018.jpg/1280px-Construction_site_in_Tokyo_2018.jpg', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  console.log('Status Code:', res.statusCode);
});
