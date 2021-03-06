var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

var gulp = require('gulp');

gulp.task('build-js', function (callback) {
    runSequence('webpack-build', callback);
});

gulp.task('build-css', function (callback) {
    runSequence('compile-scss', 'import-css', 'minify-css', callback);
});

gulp.task('build',function (callback) {
    runSequence('clean-dist', 'build-js', 'build-css', 'copy-dist', callback);
});

gulp.task('live', ['webpack-dev-server-live']);

gulp.task('default', ['webpack-dev-server']);
