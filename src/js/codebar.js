/* global codebarConfig: true */
var tpl = require('../jst/codebar.dot');
var domReady = require('./lib/domReady.js');
var deepExtend = require('./lib/deepExtend.js');
var defaults = require('../config.json');
var domContainer = document.createElement('div');

domReady(function() {
  var options = codebarConfig === 'undefined' ? defaults : deepExtend({}, defaults, codebarConfig);
  var classList = 'codebar';

  if (options.ui.theme) {
    require('!style!css?minimize!sass!../scss/style.scss');
    classList += ' codebar-' + options.ui.theme;
  }

  domContainer.id = 'codebar';
  domContainer.className = classList;
  domContainer.innerHTML = tpl(options);
  document.body.appendChild(domContainer);
});
