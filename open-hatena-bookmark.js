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
try {
  if(window.XDomainRequest){
    throw Error('not support ie.');
  } else if(window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
    var requestUrl = 'https://jsonp.afeld.me/?url=' +
      encodeURIComponent('http://b.hatena.ne.jp/entry/jsonlite/?url=' + encodeURIComponent(targetUrl));
    xhr.open('get', requestUrl);
    xhr.onload = function () {
      if (200 <= xhr.status && xhr.status < 300) {
        var response = JSON.parse(xhr.responseText);
        if (window.confirm(response.count + 'users, ' + 'Open hatena bookmark page? ' + response.entry_url)) {
          window.open(response.entry_url, null);
        }
      } else {
        throw Error('error xhr response');
      }
    };
    xhr.onerror = function () {
      throw Error('error xhr response');
    };
    xhr.send();
  } else {
    throw Error('unknown client.');
  }
} catch(error) {
  /**
   * @see http://b.hatena.ne.jp/help/entry/api
   */
  var entryUrl = 'http://b.hatena.ne.jp/entry/' + targetUrl.replace(/#/g, '%23');
  if (window.confirm('Open hatena bookmark page? ' + entryUrl)) {
    window.open(entryUrl, null);
  }
}
