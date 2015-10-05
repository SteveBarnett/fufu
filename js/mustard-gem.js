// For info only. Minified version is used in the head of the doc.
if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
  loadJS( "/fufu/js/main.min.js" );

  WebFontConfig = {
    google: { families: [ 'Exo+2:400,700:latin' ] }
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