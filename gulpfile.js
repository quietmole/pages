var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');
var fs = require('fs');
var targets = [
  'create-link-plain'
];

gulp.task('build', function() {
  var options = {};
  targets.forEach(function(target) {
    options[target] = {
      src: fs.readFileSync(target + '.js'),
      tpl: '<a href="javascript:%s">' + target.replace(/-/g, ' ') + '</a>'
    };
  });
  gulp.src('./template/*.html')
    .pipe(htmlReplace(options))
    .pipe(gulp.dest('./'));
});
