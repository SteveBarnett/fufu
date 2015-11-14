// For info only. Minified version is used in the head of the doc.
if('querySelector' in document && 'addEventListener' in window && navigator.userAgent.indexOf('Opera Mini') === -1) {
  loadJS( "/fufu/js/main-rape-crisis.min.js" );

  WebFontConfig = {
    google: { families: [ 'Source+Sans+Pro:400,700:latin', 'Roboto+Condensed:300:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

}
