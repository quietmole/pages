var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');
var fs = require('fs');
var bookmarkleter = require('bookmarkleter');
var targets = [
  'create-link-plain',
  'create-link-markdown',
  'create-link-html'
];

gulp.task('build', function() {
  var options = {};
  targets.forEach(function(target) {
    var compiled = bookmarkleter(fs.readFileSync(target + '.js'), {mangleVars: true, anonymize: true});
    var forCopy = bookmarkleter('window.prompt("built javascript", "' + compiled + '")', {mangleVars: true, anonymize: true});
    options[target] = {
      src: [[compiled, forCopy]],
      tpl: '<a href="%s">' + target.replace(/-/g, ' ') +
      '</a> / <a href="%s">copy javascript</a>'
    };
  });
  gulp.src('./template/*.html')
    .pipe(htmlReplace(options))
    .pipe(gulp.dest('./'));
});
