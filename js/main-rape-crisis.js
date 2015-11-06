'use strict';

var fufu = (function () {

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
    addClass: addClass,
    removeClass: removeClass,
    getTarget: getTarget,
    preventActions: preventActions
  };
//
})();

(function (window, document) {

  var docEl,
  listTabs,
  listTabItems,
  numListTabItems,
  targetListTabItem,
  currentHash,
  numListTabs,
  targetTab,
  targetTabList,
  targetTabItem,
  targetTabItems,
  numTargetTabItems,
  targetTabId,
  hasPushState;

  // tabs

  // grab all the elements we need
  docEl  = document.documentElement;
  listTabs = docEl.querySelectorAll('.list-tabs');
  listTabItems = docEl.querySelectorAll('.list-tab-item');

  // mark the doc as js-ready, having cut the mustard
  fufu.removeClass(docEl, 'no-js');
  fufu.addClass(docEl, 'js');

  // js version of show / hide tabs, for browsers with pushState
  hasPushState = ('pushState' in history);
  if(hasPushState) {
    fufu.addClass(docEl, 'pushState');
  }

  // show a tab and tab item, if a hash is in the URL
  currentHash = window.location.hash;
  if (currentHash.length > 0 && targetTabItem !== 'null') {
    targetTabItem = docEl.querySelector('[href="' + currentHash + '"]');
    targetListTabItem =  docEl.querySelector(currentHash);
    fufu.addClass(targetTabItem.parentNode, 'tab-selected');
    if (hasPushState) {
      fufu.addClass(targetListTabItem, 'list-tab-item-selected');
    }
  } else {
  // otherwise select the first one
    fufu.addClass(listTabs[0].querySelector('li'), 'tab-selected');
    if (hasPushState) {
      fufu.addClass(listTabItems[0], 'list-tab-item-selected');
    }
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

      // to prevent scrolling on clicking
      if(hasPushState) {
        ev.preventDefault();

        targetListTabItem = docEl.querySelector(fufu.getTarget(ev).getAttribute('href'));

        history.pushState({}, '', fufu.getTarget(ev).href);

        numListTabItems = listTabItems.length;
        for (var l = 0; l < numListTabItems; l++) {
          fufu.removeClass(listTabItems[l],  'list-tab-item-selected');
        }

        fufu.addClass(targetListTabItem, 'list-tab-item-selected');
      }
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
