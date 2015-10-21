var selected = ('getSelection' in window ? window : document).getSelection().toString();
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
