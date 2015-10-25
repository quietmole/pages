function getSelectedText() {
  var txt = '';
  if (window.getSelection) {
    txt = window.getSelection().toString();
  } else if (document.getSelection) {
    txt = document.getSelection().toString();
  } else if (document.selection) {
    txt = document.selection.createRange().text;
  } else {
    return;
  }
  return txt;
}

var selected = getSelectedText();
var title = window.document.title;
var url = window.location.href;
var result = [];
if (selected) {
  result.push(selected);
} else if (title) {
  result.push(title);
}
result.push(url);
window.prompt('created link', result.join(' '));
