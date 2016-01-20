/* global codebarConfig: true */
var tpl = require('../jst/codebar.dot');
var domReady = require('./lib/domReady.js');
var deepExtend = require('./lib/deepExtend.js');
var defaults = require('../config.json');
var options;
var domContainer = document.createElement('div');

domReady(function() {
  options = deepExtend({}, defaults, typeof codebarConfig === 'undefined' ? {} : codebarConfig);

  if (options.ui.theme) {
    require('!style!css?minimize!sass!../scss/style.scss');
    domContainer.className = 'codebar codebar-' + options.ui.theme;
  }

  domContainer.id = 'codebar';
  domContainer.innerHTML = tpl(options);
  document.body.appendChild(domContainer);
});
