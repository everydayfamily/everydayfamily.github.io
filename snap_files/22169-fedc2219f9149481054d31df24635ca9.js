
;(function() {
  var vantage = {
    version: '0.1.2',
    pixelId: '435119166884328',
    platform: 'shopify',
    storeId: '22169',
    storeName: 'Enfamil ',
    adwordsAccountId: '4256745137',
    googleConversionTrackerId: 'AW-779913189',
    googleSendToSuffix: 'O126COHpkY0BEOWP8vMC',
  };

  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://dow068lag04cv.cloudfront.net/vantage-3.0-min.js';
  script.async = true;
  head.appendChild(script);
  
  window.$vantage = vantage;
})(window);
