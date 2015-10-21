var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');
var fs = require('fs');

gulp.task('build', function() {
  var createLinkPlain = fs.readFileSync('./create-link-plain.js');
  gulp.src('./template/*.html')
    .pipe(htmlReplace({
      'create-link-plain': {
        src: createLinkPlain,
        tpl: '<a href="javascript:%s">create link plain</a>'
      }
    }))
    .pipe(gulp.dest('./'));
});
