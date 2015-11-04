'use strict';

var fufu = (function () {
//
//   // var docEl;
//
//   // docEl = document.documentElement;
//   // hamburger = document.getElementById("jump");
//
  function getTarget(ev) {
    ev = ev || window.event;
    return ev.target || ev.srcElement;
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
//   //
//   // function toggleClass(el, cn) {
//   //   if(hasClass(el, cn)) {
//   //     removeClass(el, cn);
//   //   } else {
//   //     addClass(el, cn);
//   //   }
//   // }
//   //
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
//
  return {
//     // docEl: docEl
//     // hamburger: hamburger,
    addClass: addClass,
    removeClass: removeClass,
    getTarget: getTarget,
//     // toggleClass: toggleClass,
//     // bindEvent: bindEvent,
    preventActions: preventActions
  };
//
})();

(function (window, document) {

  // if(fufu.menu && fufu.signin && fufu.showSignin) {
  //
  //   fufu.showSignin.addEventListener("click", function(ev) {
  //     // fufu.preventActions(ev);
  //   });
  //
  // }

  var docEl,
  listTabs,
  listTabItems,
  currentHash,
  numListTabs,
  targetTab,
  targetTabList,
  targetTabItem,
  targetTabItems,
  numTargetTabItems;

  // tabs

  // grab all the elements we need
  docEl  = document.documentElement;
  listTabs = docEl.querySelectorAll('.list-tabs');

  // mark the doc as js-ready, having cut the mustard
  fufu.removeClass(docEl, 'no-js');
  fufu.addClass(docEl, 'js');

  // show a tab if it's in the URL
  currentHash = window.location.hash;
  targetTabItem = docEl.querySelector('[href="' + currentHash + '"]');
  // if there's a tab hash in the URL, select that tab
  if (currentHash.length > 0 && targetTabItem !== 'null') {
    fufu.addClass(targetTabItem.parentNode, 'tab-selected');
  } else {
  // otherwise select the first one
    fufu.addClass(listTabs[0].querySelector('li'), 'tab-selected');
  }

  // listen for clicks on the listTabs
  numListTabs = listTabs.length;
  for (var i = 0; i < numListTabs; i++) {
    listTabs[i].addEventListener('click', function(ev){

      targetTab = fufu.getTarget(ev).parentNode;
      targetTabList = targetTab.parentNode;
      targetTabItems = targetTabList.querySelectorAll('li');
      numTargetTabItems = targetTabItems.length;

      for (var j = 0; j < numTargetTabItems; j++) {
        fufu.removeClass(targetTabItems[j], 'tab-selected');
      }
      fufu.addClass(targetTab, 'tab-selected');
    });
  }

  // maps in iframes, only for biggish screens, matchMedia to tabs
  if('matchMedia' in window) {
    if (window.matchMedia("(min-width: 40em)").matches) {
      var mapLinks,
      numMaps,
      iframeDataSrc;

      mapLinks = docEl.querySelectorAll('.map-link');
      numMaps = mapLinks.length;
      for (var k = 0; k < numMaps; k++) {
        iframeDataSrc = mapLinks[k].getAttribute('data-iframe-src');

        mapLinks[k].insertAdjacentHTML('beforebegin', '<iframe class="map-iframe"  frameborder="0" src="' + iframeDataSrc + '"></iframe>');
        mapLinks[k].parentNode.removeChild(mapLinks[k]);
      }

    }
  }


}(window, window.document));
