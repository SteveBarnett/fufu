'use strict';

var fufu = (function () {

  var docEl,
  hamburger,
  close,
  back,
  menu,
  showSignin,
  showRegister,
  showSearch,
  signin,
  register,
  search,
  logo,
  navClose;

  function init() {
    docEl = document.documentElement;
    hamburger = document.getElementById("jump");
    close = document.getElementById("close");
    back = document.getElementById("back");
    menu = document.getElementById("menu");
    showSignin = document.getElementById("show-signin");
    showRegister = document.getElementById("show-register");
    showSearch = document.getElementById("show-search");
    signin = document.getElementById("signin");
    register = document.getElementById("register");
    search = document.getElementById("search");
    logo = document.getElementById("logo");
    navClose = document.getElementById("nav-close");
  }

  init();

  function getTarget(evt) {
    evt = evt || window.event;
    return evt.target || evt.srcElement;
  }

  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
  }

  function hasClass(el, cn) {
    return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
  }

  function addClass(el, cn) {
    if (cn.indexOf(' ') >= 0) {
      classes = cn.split(' ');
      for (var p = 0; p < classes.length; p++) {
        if(!hasClass(el, classes[p])) {
          el.className = (el.className === '') ? classes[p] : el.className + ' ' + classes[p];
        }
      }
    } else {
      if (!hasClass(el, cn)) {
        el.className = (el.className === '') ? cn : el.className + ' ' + cn;
      }
    }
  }

  function removeClass(el, cn) {
    if (cn.indexOf(' ') >= 0) {
      classes = cn.split(' ');
      for (var p = 0; p < classes.length; p++) {
        el.className = trim((' ' + el.className + ' ').replace(' ' + classes[p] + ' ', ' '));
      }
    } else {
      el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    }
  }

  function toggleClass(el, cn) {
    if(hasClass(el, cn)) {
      removeClass(el, cn);
    } else {
      addClass(el, cn);
    }
  }

  function bindEvent(target, type, listener, capture) {
    if(window.addEventListener) {
      target.addEventListener(type, listener, capture);
    } else if(window.attachEvent && typeof window.event !== 'undefined') {
      if(type === 'blur') {
        type = 'focusout';
      } else if(type === 'focus') {
        type = 'focusin';
      }
      target.attachEvent( 'on' + type, listener );
    }
  }

  function preventActions(ev) {
    ev = ev || window.event;
    if(ev.stopPropagation && ev.preventDefault) {
      ev.stopPropagation();
      ev.preventDefault();
    } else {
      ev.cancelBubble = true;
      ev.returnValue = false;
    }
  }

  function hideMenu() {
    addClass(menu, "hidden");
    addClass(logo, "hidden");
    addClass(hamburger, "hidden");
    addClass(close, "hidden");
  }

  function hideFormMenus() {
    addClass(back, "hidden");
    addClass(signin, "hidden");
    addClass(register, "hidden");
    addClass(search, "hidden");
  }

  function toggleBurgerMenu() {
    toggleClass(hamburger, "hidden");
    toggleClass(menu, "hidden");
    toggleClass(close, "hidden");
    toggleClass(navClose, "hidden");
  }

  return {
    init: init,
    docEl: docEl,
    hamburger: hamburger,
    close: close,
    back: back,
    menu: menu,
    showSignin: showSignin,
    showRegister: showRegister,
    showSearch: showSearch,
    signin: signin,
    register: register,
    search: search,
    logo: logo,
    navClose: navClose,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    bindEvent: bindEvent,
    preventActions: preventActions,
    hideMenu: hideMenu,
    hideFormMenus: hideFormMenus,
    toggleBurgerMenu: toggleBurgerMenu
  };

})();

(function (window, document) {

  fufu.removeClass(fufu.docEl,"no-js");
  fufu.addClass(fufu.docEl,"js");
  fufu.addClass(fufu.menu, "hidden");
  fufu.hideFormMenus();

  // burger nav

  fufu.bindEvent(fufu.hamburger, "click", function (ev) {
    fufu.preventActions(ev);
    fufu.toggleBurgerMenu();
  });

  fufu.bindEvent(fufu.close, "click", function (ev) {
    fufu.preventActions(ev);
    fufu.toggleBurgerMenu();
  });

  fufu.bindEvent(fufu.navClose, "click", function (ev) {
    fufu.preventActions(ev);
    fufu.removeClass(fufu.hamburger, "hidden");
    fufu.addClass(fufu.menu, "hidden");
    fufu.addClass(fufu.close, "hidden");
    fufu.addClass(fufu.navClose, "hidden");
    // hide menu forms too
    fufu.hideFormMenus();
    fufu.removeClass(fufu.logo, "hidden");
  });

  // menu forms

  fufu.bindEvent(fufu.showSignin, "click", function (ev) {
    fufu.preventActions(ev);
    fufu.hideMenu();
    fufu.removeClass(fufu.back, "hidden");
    fufu.removeClass(fufu.signin, "hidden");
  });

  fufu.bindEvent(fufu.showRegister, "click", function (ev) {
    fufu.preventActions(ev);
    fufu.hideMenu();
    fufu.removeClass(fufu.back, "hidden");
    fufu.removeClass(fufu.register, "hidden");
  });

  fufu.bindEvent(fufu.showSearch, "click", function (ev) {
    fufu.preventActions(ev);
    fufu.hideMenu();
    fufu.removeClass(fufu.back, "hidden");
    fufu.removeClass(fufu.search, "hidden");
  });

  fufu.bindEvent(fufu.back, "click", function (ev) {
    fufu.preventActions(ev);
    fufu.removeClass(fufu.menu, "hidden");
    fufu.removeClass(fufu.logo, "hidden");
    fufu.removeClass(fufu.close, "hidden");
    fufu.hideFormMenus();
  });



}(window, window.document));
