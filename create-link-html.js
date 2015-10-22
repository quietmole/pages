/**
 * @license
 * lodash.escape 3.10.1 <https://lodash.com/>
 * and baseToString, reUnescapedHtml, reHasUnescapedHtml, htmlEscapes, escapeHtmlChar
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}
var reUnescapedHtml = /[&<>"'`]/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '`': '&#96;'
};

function escapeHtmlChar(chr) {
  return htmlEscapes[chr];
}
function escape(string) {
  string = baseToString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

var selected = ('getSelection' in window ? window : document).getSelection().toString();
var title = window.document.title;
var url = window.location.href;
var result = '';
result += '<a href="' + escape(url) + '">';
if (selected) {
  result += escape(selected);
} else {
  result += escape(title);
}
result += '</a>';
window.prompt('created link', result);
