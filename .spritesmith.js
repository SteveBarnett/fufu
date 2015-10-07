'use strict';

var util = require('util');

module.exports = {
  src: './css/img/rape-crisis/*.{png,gif,jpg}',
  destImage: './css/img/rape-crisis/icons.png',
  destCSS: './css/rape-crisis-icons.css',
  padding: 0,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  engine: 'gmsmith',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.i-rape-crisis-%s:before', item.name);
    }
  }
};
