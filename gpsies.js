console.clear();
var attempts = 0;
var init = function() {

  var script = document.createElement('script');
  script.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
  document.getElementsByTagName('head')[0].appendChild(script);

  if ($) {

  $('[id^="google_ads_iframe"]').hide();
  //$('.map-wrapper + .content-wrapper').hide();
  $('#mobile').hide();
  $('#help-nav a').css({color:'#999'});
  } else {
    console.log('geen jquery');
  }
}

try {
  init();
} catch(e) {
  if (attempts < 10) {
    attempts++;
    init();
  }
  
}

