var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');
var fs = require('fs');
var bookmarkleter = require('bookmarkleter');
var targets = [
  'create-link-plain'
];

gulp.task('build', function() {
  var options = {};
  targets.forEach(function(target) {
    options[target] = {
      src: bookmarkleter(fs.readFileSync(target + '.js'), {mangleVars: true, anonymize: true}),
      tpl: '<a href="%s">' + target.replace(/-/g, ' ') + '</a>'
    };
  });
  gulp.src('./template/*.html')
    .pipe(htmlReplace(options))
    .pipe(gulp.dest('./'));
});
