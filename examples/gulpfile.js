var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('auto-compile', function() {
    gulp.watch([
      "*.ts",
    ], "compile-ts");
});

gulp.task('serve', function(cb) {
    browserSync({
        port: 8080,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
      "*.js",
      "*.css",
      "*.html"
    ], browserSync.reload, cb);
});