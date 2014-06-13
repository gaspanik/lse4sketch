var gulp = require('gulp'),
  shell = require('gulp-shell');

var imgsrc = './src/*.sketch';
var imgdir = './export/';

gulp.task('sketch', function () {
  return gulp.src(imgsrc,  {read: false})
    .pipe(shell([
      'sketchtool export artboards --output="' + imgdir + '" <%= file.path %>'
    ]));
});

gulp.task('watch', function() {
  gulp.watch('./src/**', ['sketch']);
});

gulp.task('default', ['sketch', 'watch']);