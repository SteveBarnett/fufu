"use strict";

var fufu = (function () {

  var docEl;

  docEl = document.documentElement;
  // hamburger = document.getElementById("jump");

  // function getTarget(evt) {
  //   evt = evt || window.event;
  //   return evt.target || evt.srcElement;
  // }
  //
  // function trim(str) {
  //   return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
  // }
  //
  // function hasClass(el, cn) {
  //   return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
  // }
  //
  // function addClass(el, cn) {
  //   if (cn.indexOf(' ') >= 0) {
  //     classes = cn.split(' ');
  //     for (var p = 0; p < classes.length; p++) {
  //       if(!hasClass(el, classes[p])) {
  //         el.className = (el.className === '') ? classes[p] : el.className + ' ' + classes[p];
  //       }
  //     }
  //   } else {
  //     if (!hasClass(el, cn)) {
  //       el.className = (el.className === '') ? cn : el.className + ' ' + cn;
  //     }
  //   }
  // }
  //
  // function removeClass(el, cn) {
  //   if (cn.indexOf(' ') >= 0) {
  //     classes = cn.split(' ');
  //     for (var p = 0; p < classes.length; p++) {
  //       el.className = trim((' ' + el.className + ' ').replace(' ' + classes[p] + ' ', ' '));
  //     }
  //   } else {
  //     el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
  //   }
  // }
  //
  // function toggleClass(el, cn) {
  //   if(hasClass(el, cn)) {
  //     removeClass(el, cn);
  //   } else {
  //     addClass(el, cn);
  //   }
  // }
  //
  // function preventActions(ev) {
  //   ev = ev || window.event;
  //   if(ev.stopPropagation && ev.preventDefault) {
  //     ev.stopPropagation();
  //     ev.preventDefault();
  //   } else {
  //     ev.cancelBubble = true;
  //     ev.returnValue = false;
  //   }
  // }

  return {
    docEl: docEl
    // hamburger: hamburger,
    // addClass: addClass,
    // removeClass: removeClass,
    // toggleClass: toggleClass,
    // bindEvent: bindEvent,
    // preventActions: preventActions
  };

})();

(function (window, document) {

  // if(fufu.menu && fufu.signin && fufu.showSignin) {
  //
  //   fufu.showSignin.addEventListener("click", function(ev) {
  //     // fufu.preventActions(ev);
  //   });
  //
  // }

}(window, window.document));
