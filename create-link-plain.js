(function(w) {
  var s = ('getSelection' in window ? window : document).getSelection().toString();
  var t = w.document.title;
  var u = w.location.href;
  var r = [];
  if(s) { r.push(s); } else if (t) { r.push(t); }
  r.push(u);
  w.prompt('created link', r.join(' '));
  void 0;
})(window);
