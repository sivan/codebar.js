var gulp = require('gulp');
var combiner = require('stream-combiner2');
var webpack = require('webpack-stream');
var webpackConfig = require('./src/webpack.config.js')
var named = require('vinyl-named');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

gulp.task('publish', function() {
  var combined = combiner.obj([
    gulp.src(['src/js/*.js', '!src/js/*.min.js']),
    named(),
    webpack(webpackConfig),
    uglify(),
    gulp.dest('dist/'),
    livereload()
  ]);
  combined.on('error', console.error.bind(console));
  return combined;
});
gulp.task('default', function() {
  livereload.listen();
  return gulp.watch(['src/js/*.js', '!src/js/*.min.js', 'src/scss/*.scss', 'src/jst/*.dot'], ['publish']);
});
