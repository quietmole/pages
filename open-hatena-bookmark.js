/**
 * @license
 * http://upa-pc.blogspot.jp/2015/03/javascript-canonical-url-get.html
 * Copyright © 2012-2015 Dr.ウーパ
 *
 * @return {?string} canonical url.
 */
function browserCanonicalUrl () {
  var links = document.getElementsByTagName('link');
  var linksLength = links.length;
  for (var i = 0; i < linksLength; i++) {
    if (links[i].rel && links[i].rel.toLowerCase() === 'canonical') {
      return links[i].href;
    }
  }
  return null;
}

var targetUrl = browserCanonicalUrl() || location.href;
/**
 *
 * @see http://b.hatena.ne.jp/help/entry/api
 */
var entryUrl = 'http://b.hatena.ne.jp/entry/' + targetUrl.replace(/#/g, '%23');

if (window.confirm('Open hatena bookmark page? ' + entryUrl)) {
  window.open(entryUrl, null);
}
